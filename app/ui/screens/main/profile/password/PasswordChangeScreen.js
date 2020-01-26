import React from 'react'
import {ScrollView, StatusBar, View} from 'react-native';
import BaseComponent from '../../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import Toolbar from '../../../../components/Toolbar';
import strings from '../../../../../locales/strings';
import colors from '../../../../../utils/colors';
import NavigationService from '../../../../../navigation/NavigationService';
import {connect} from 'react-redux';
import {actions} from '../../../../../state/actions';
import CustomInput from '../../../../components/CustomInput';
import CustomButton from '../../../../components/CustomButton';
import LoadingDialog from '../../../../dialogs/LoadingDialog';

class ProfileEditScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.inputs = {};

    this.state = {
      oldPassword: '',
      oldPasswordError: '',
      newPassword: '',
      newPasswordError: '',
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderToolbar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
      )
  }

  renderContent = () => {
    return(
      <View style={styles.container}>
        {this.renderPasswordInputs()}
        {this.renderSaveButton()}
      </View>
    )
  };

  renderPasswordInputs = () => {
    const {user} = this.props;

    return(
      <View>
        <CustomInput
          inputRef={r => this.inputs['old_password_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(value) => {
            this.setState({
              oldPassword: value,
              oldPasswordError: '',
            })
          }}
          autoFocus
          returnKeyType="next"
          errorText={this.state.oldPasswordError}
          value={this.state.oldPassword}
          placeholder={strings.old_password}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('new_password_input_id')}
          style={styles.input}/>

        <CustomInput
          inputRef={r => this.inputs['new_password_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          onChangeText={(value) => {
            this.setState({
              newPassword: value,
              newPasswordError: '',
            })
          }}
          returnKeyType="done"
          errorText={this.state.newPasswordError}
          value={this.state.newPassword}
          placeholder={strings.new_password}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.onSubmitButtonClicked()}
          style={styles.input}/>
      </View>
    )
  };

  renderSaveButton = () => {
    return(
      <CustomButton
        onClick={() => {
          const {changePassword, userLogin} = this.props;

          const body = {
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword
          };

          const payload = {
            id: userLogin.userId,
            auth: userLogin.id,
            data: body
          };

          changePassword(payload)
        }}
        style={styles.updateButton}
        disabledColor={colors.button_disabled}
        buttonColor={colors.green}
        title={strings.save}/>
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.change_password}
        backButtonEnabled
        onBackButtonClick={() => this.onBackButtonClicked()}
      />
    )
  };

  renderStatusBar = () => {
    return(
      <StatusBar
        backgroundColor={colors.statusbar_transparent}
        hidden={false}
        barStyle={'light-content'} />
    )
  };

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };

  focusNextField = id => {
    this.inputs[id].focus();
  };

  onSubmitButtonClicked = () => {
    // to do
  };
}

export default connect(
  (state, props) => ({
    user: state.profile.user,
    userLogin: state.profile.userLogin,
    updating: state.profile.passwordUpdating,
  }),
  dispatch => ({
    changePassword: data => dispatch(actions.userChangePassword(data))
  }),
)(ProfileEditScreen);
