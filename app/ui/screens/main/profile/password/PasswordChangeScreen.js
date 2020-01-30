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
import TextInputLayout from '../../../../components/floating/TextInputLayout';

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
        <TextInputLayout
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
          label={strings.old_password}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('new_password_input_id')}
          wrapperStyle={styles.input}/>

        <TextInputLayout
          ref="new_password_input_id"
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
          label={strings.new_password}
          autoCapitalize="none"
          onSubmitEditing={() => this.onSubmitButtonClicked()}
          wrapperStyle={styles.input}/>
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
    if (this.refs[id]) {
      this.refs[id].focus();
    }
  };

  onSubmitButtonClicked = () => {
    // to do
  };
}

export default connect(
  (state, props) => ({
    user: state.profile.user,
    userLogin: state.profile.userLogin,
    updating: state.changePassword.isLoading,
  }),
  dispatch => ({
    changePassword: data => dispatch(actions.userChangePassword(data))
  }),
)(ProfileEditScreen);
