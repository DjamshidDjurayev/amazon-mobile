import React, {Component} from 'react'
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation';
import {actions} from '../../../state/actions';
import colors from '../../../colors';
import CustomText from '../../components/CustomText';
import strings from '../../../strings';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import {toDp} from '../../../utils/ScreenUtils';
import CustomButton from '../../components/CustomButton';
import TextUtils from '../../../utils/TextUtils';
import CustomInput from '../../components/CustomInput';
import * as NavigationService from '../../../navigation/NavigationService'
import styles from './style';

class LoginScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      loginButtonDisabled: true,
      loginInputValue: "",
      passwordInputValue: "",
    };
  }

  componentWillUnmount(): void {
    if (this.props.isLoading) {
      this.props.cancelLogin()
    }
  }

  render() {
    return(
        <SafeAreaView style={styles.rootView}>
          {this.renderStatusBar()}
          <ScrollView keyboardShouldPersistTaps={'always'}>
            <KeyboardAvoidingView behavior={null} style={styles.container}>
              {/* header */}
              {this.renderLogoHeader()}
              {/* content */}
              {this.renderContent()}
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
    )
  }

  renderStatusBar = () => {
    return(
      <StatusBar
        translucent
        backgroundColor={colors.statusbar_transparent}
        hidden={false}
        barStyle={'light-content'} />
      )
  };

  renderLogoHeader = () => {
    return (
    <View style={styles.logoView}>
      <Text style={styles.logoText}>
        LOGO
      </Text>
    </View>
    )
  };

  renderContent = () => {
    return (
      <View style={styles.contentContainer} >
        <CustomText
          title={strings.log_in}
          size={toDp(18)}
          style={styles.loginText} />

        {/* socials */}
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

        {/* inputs */}
        <CustomInput
          inputRef={r => this.inputs['login_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(loginInputValue) => {
            this.setState({
              loginInputValue,
              loginButtonDisabled: TextUtils.isEmpty(loginInputValue)
            })
          }}
          keyboardType={'numeric'}
          returnKeyType="next"
          value={this.state.loginInputValue}
          placeholder={strings.phone}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('password_input_id')}
          style={styles.loginInput}/>

        <CustomInput
          inputRef={r => this.inputs['password_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          onChangeText={(passwordInputValue) => {
            this.setState({
              passwordInputValue,
            })
          }}
          secureTextEntry
          returnKeyType="done"
          value={this.state.passwordInputValue}
          placeholder={strings.password}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          style={styles.loginInput}/>

          <View style={styles.signUpContainer}>
            <CustomText
              title={strings.no_account}
              textColor={colors.light_gray} />

            <TouchableOpacity
              style={styles.signUpText}
              onPress={() => this.onSignUpClicked()}>
              <CustomText
                title={strings.sign_up}
                textColor={colors.green} />
            </TouchableOpacity>
          </View>

        <CustomButton
          isLoading={this.props.isLoading}
          onClick={() => this.onLoginButtonClicked()}
          disabled={this.state.loginButtonDisabled}
          buttonColor={colors.green}
          disabledColor={colors.button_disabled}
          title={strings.log_in}/>
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

  onSignUpClicked = () => {
    NavigationService.navigate('Registration')
  };

  focusNextField = id => {
    this.inputs[id].focus();
  };

  onLoginButtonClicked = () => {
    if (TextUtils.isEmpty(this.state.loginInputValue)) {
      return;
    }

    if (TextUtils.isEmpty(this.state.passwordInputValue)) {
      return;
    }

    this.props.performLogin()
  }
}

export default connect(
  (state, props) => ({
    isLoading: state.login.isLoading,
    isCancelled: state.login.isCancelled,
    response: state.login.response,
  }),
  dispatch => ({
    performLogin: () => dispatch(actions.loginPerform()),
    cancelLogin: () => dispatch(actions.loginCancel()),
  }),
)(LoginScreen);
