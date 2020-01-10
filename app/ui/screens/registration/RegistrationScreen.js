import React from 'react'
import {
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation'
import {actions} from '../../../state/actions';
import colors from '../../../colors';
import CustomText from '../../components/CustomText';
import strings from '../../../strings';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import {toDp} from '../../../utils/ScreenUtils';
import CustomButton from '../../components/CustomButton';
import TextUtils from '../../../utils/TextUtils';
import CustomInput from '../../components/CustomInput';
import styles from './style';
import BaseComponent from '../../base/BaseComponent';
import Logo from '../../components/Logo';

class RegistrationScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.inputs = {};

    this.state = {
      signUpButtonDisabled: true,
      nameInputValue: "",
      lastNameInputValue: "",
      phoneInputValue: "",
      passwordInputValue: "",
      emailInputValue: "",
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          <KeyboardAvoidingView behavior={null} style={styles.container}>
            {this.renderLogoHeader()}
            {this.renderSocials()}
            {this.renderInputs()}
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderInputs = () => {
    return(
      <View>
        <CustomInput
          inputRef={r => this.inputs['name_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(nameInputValue) => {
            this.setState({
              nameInputValue,
              signUpButtonDisabled: TextUtils.isEmpty(nameInputValue)
            })
          }}
          returnKeyType="next"
          value={this.state.nameInputValue}
          placeholder={strings.name}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('last_name_input_id')}
          style={styles.loginInput}/>

        <CustomInput
          inputRef={r => this.inputs['last_name_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(lastNameInputValue) => {
            this.setState({
              lastNameInputValue,
            })
          }}
          returnKeyType="next"
          value={this.state.lastNameInputValue}
          placeholder={strings.lastName}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('phone_input_id')}
          style={styles.loginInput}/>

        <CustomInput
          inputRef={r => this.inputs['phone_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(value, extractedValue) => {
            this.setState({
              phoneInputValue: extractedValue,
            });
          }}
          mask={'+[00000] [000] [00] [00]'}
          keyboardType={'numeric'}
          returnKeyType="next"
          value={this.state.phoneInputValue}
          placeholder={strings.phone}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('email_input_id')}
          style={styles.loginInput}/>

        <CustomInput
          inputRef={r => this.inputs['email_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(emailInputValue) => {
            this.setState({
              emailInputValue,
            })
          }}
          returnKeyType="next"
          value={this.state.emailInputValue}
          placeholder={strings.email}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('password_input_id')}
          style={styles.loginInput}/>

        <CustomInput
          inputRef={r => this.inputs['password_input_id'] = r}
          showHidePassword
          numberOfLines={1}
          multiline={false}
          onChangeText={(passwordInputValue) => {
            this.setState({
              passwordInputValue,
            })
          }}
          returnKeyType="done"
          value={this.state.passwordInputValue}
          placeholder={strings.password}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          style={styles.loginInput}/>

        <CustomButton
          onClick={() => this.onSignUpClicked()}
          style={styles.registrationButton}
          disabled={this.state.signUpButtonDisabled}
          buttonColor={colors.green}
          disabledColor={colors.button_disabled}
          title={strings.sign_up}/>
      </View>
    )
  };

  renderStatusBar = () => {
    return (
      <StatusBar
        backgroundColor={colors.statusbar_transparent}
        hidden={false}
        barStyle={'light-content'} />
    )
  };

  renderLogoHeader = () => {
    return (
      <Logo title={'LOGO'}/>
    )
  };

  renderSocials = () => {
    return (
      <View style={styles.contentContainer}>
        <CustomText
          title={strings.registration}
          size={toDp(18)}
          style={styles.loginText} />

        <View style={styles.socialsContainer}>
          <TouchableOpacity
            activeOpacity={.7}
            onPress={this.onSocialIconClicked("google")}
            style={styles.iconContainer}>
            <EvilIcon
              name={"sc-google-plus"}
              color={colors.white}
              size={toDp(32)} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={.7}
            onPress={this.onSocialIconClicked("fb")}
            style={styles.iconContainer}>
            <EvilIcon
              name={"sc-facebook"}
              color={colors.white}
              size={toDp(48)} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={.7}
            onPress={this.onSocialIconClicked("vk")}
            style={styles.iconContainer}>
            <EvilIcon
              name={"sc-vk"}
              color={colors.white}
              size={toDp(40)} />
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line}/>
          <CustomText
            title={strings.or}
            size={toDp(18)}
            style={styles.orText} />
        </View>
      </View>
    )
  };

  onSocialIconClicked = social => {
    switch (social) {
      case "google":
        //
        break;

      case "fb":
        //
        break;

      case "vk":
        //
        break;
    }
  };

  focusNextField = id => {
    if (this.inputs[id]) {
      this.inputs[id].focus();
    }
  };

  onSignUpClicked = () => {

  };
}

export default connect(
  (state, props) => ({
    isLoading: state.registration.isLoading,
    isCancelled: state.registration.isCancelled,
    response: state.registration.response,
  }),
  dispatch => ({
    performRegistration: (payload) => dispatch(actions.registrationPerform(payload)),
    cancelRegistration: () => dispatch(actions.registrationCancel()),
  }),
)(RegistrationScreen);
