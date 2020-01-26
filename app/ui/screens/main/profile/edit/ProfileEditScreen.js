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
      inputValue: props.user && props.user.name,
      inputError: '',
      lastNameValue: props.user && props.user.surname,
      lastNameError: '',

      emailValue: props.user && props.user.email,
      emailError: '',

      phoneValue: props.user && props.user.phoneNumber,
      phoneError: '',
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderToolbar()}
          {this.renderContent()}
          {this.renderModals()}
        </ScrollView>
      </SafeAreaView>
      )
  }

  renderContent = () => {
    const {user, navigation} = this.props;
    const mode = navigation.getParam('mode', null);

    return(
      <View style={styles.container}>
        {'names' === mode ? this.renderNamesInput() : null}
        {'email' === mode ? this.renderEmailInput() : null}
        {'phone' === mode ? this.renderPhoneInput() : null}
        {this.renderSaveButton()}
      </View>
    )
  };

  renderPhoneInput = () => {
    const {user} = this.props;

    return(
      <View>
        <CustomInput
          inputRef={r => this.inputs['phone_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          onChangeText={(value, extractedValue) => {
            this.setState({
              phoneValue: extractedValue,
              phoneError: '',
            })
          }}
          autoFocus
          mask={'+[00000] [000] [00] [00]'}
          keyboardType={'numeric'}
          returnKeyType="done"
          errorText={this.state.phoneError}
          defaultValue={user && user.phoneNumber}
          value={this.state.phoneValue}
          placeholder={strings.phone}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          style={styles.input}/>
      </View>
    )
  };

  renderEmailInput = () => {
    const {user} = this.props;

    return(
      <View>
        <CustomInput
          inputRef={r => this.inputs['email_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          onChangeText={(value) => {
            this.setState({
              emailValue: value,
              emailError: '',
            })
          }}
          autoFocus
          keyboardType={'default'}
          returnKeyType="done"
          errorText={this.state.emailError}
          defaultValue={user && user.email}
          value={this.state.emailValue}
          placeholder={strings.email}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          style={styles.input}/>
      </View>
    )
  };

  renderNamesInput = () => {
    const {user} = this.props;

    return(
      <View>
        <CustomInput
          inputRef={r => this.inputs['name_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(value) => {
            this.setState({
              inputValue: value,
              inputError: '',
            })
          }}
          autoFocus
          returnKeyType="next"
          errorText={this.state.inputError}
          defaultValue={user && user.name}
          value={this.state.inputValue}
          placeholder={strings.name}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('surname_input_id')}
          style={styles.input}/>

        <CustomInput
          inputRef={r => this.inputs['surname_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          onChangeText={(value) => {
            this.setState({
              lastNameValue: value,
              lastNameError: '',
            })
          }}
          returnKeyType="done"
          errorText={this.state.inputError}
          defaultValue={user && user.surname}
          value={this.state.lastNameValue}
          placeholder={strings.lastName}
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
          let body = {};
          const {user, updateUserNames, userLogin, navigation} = this.props;
          const mode = navigation.getParam('mode', null);

          switch (mode) {
            case 'names':
              if (user) {
                if (user.name === this.state.inputValue && user.surname === this.state.lastNameValue) {
                  this.onBackButtonClicked();
                  return;
                }
              }
              body = {
                name: this.state.inputValue,
                surname: this.state.lastNameValue
              };
              break;

            case 'email':
              if (user) {
                if (user.email === this.state.emailValue) {
                  this.onBackButtonClicked();
                  return;
                }
              }
              body = {
                email: this.state.emailValue,
              };
              break;

            case 'phone':
              if (user) {
                if (user.phoneNumber === this.state.phoneValue) {
                  this.onBackButtonClicked();
                  return;
                }
              }
              body = {
                phoneNumber: this.state.phoneValue,
              };
              break;
          }

          const payload = {
            id: userLogin.userId,
            auth: userLogin.id,
            data: body
          };
          updateUserNames(payload)
        }}
        style={styles.updateButton}
        disabledColor={colors.button_disabled}
        buttonColor={colors.green}
        title={strings.save}/>
    )
  };

  renderModals = () => {
    return(
      <LoadingDialog visibility={this.props.userUpdating}/>
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.profile_edit}
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
    userUpdating: state.profile.userUpdating,
  }),
  dispatch => ({
    updateUserNames: payload => dispatch(actions.userUpdateNames(payload))
  }),
)(ProfileEditScreen);
