import React from 'react'
import {
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation';
import {actions} from '../../../state/actions';
import colors from '../../../utils/colors';
import CustomText from '../../components/CustomText';
import strings from '../../../locales/strings';
import {toDp} from '../../../utils/ScreenUtils';
import CustomButton from '../../components/CustomButton';
import TextUtils from '../../../utils/TextUtils';
import NavigationService from '../../../navigation/NavigationService'
import styles from './style';
import BaseComponent from '../../base/BaseComponent';
import Logo from '../../components/Logo';
import Social from '../../components/Social';
import TextInputLayout from '../../components/floating/TextInputLayout';

class LoginScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      loginButtonDisabled: true,
      loginInputValue: '',
      passwordInputValue: '',
      loginError: '',
      passwordError: '',
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.error !== this.props.error) {
      if (this.props.error) {
        Alert.alert(null, this.props.error.message, [
          {
            text: strings.ok,
            onPress: null,
          }
        ], {
          cancelable: true,
          onDismiss: () => {
            this.props.loginErrorClear()
          }
        })
      }
    }
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
        <TextInputLayout
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          height={65}
          wrapperStyle={styles.input}
          onChangeText={(value) => {
            this.setState({
              loginInputValue: value,
              loginButtonDisabled: TextUtils.isEmpty(value),
              loginError: '',
            })
          }}
          returnKeyType="next"
          errorText={this.state.loginError}
          value={this.state.loginInputValue}
          keyboardType={'default'}
          label={strings.email}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('password_id')}
        />

        <TextInputLayout
          ref="password_id"
          numberOfLines={1}
          multiline={false}
          height={65}
          wrapperStyle={styles.input}
          onChangeText={(passwordInputValue) => {
            this.setState({
              passwordInputValue,
              passwordError: '',
            })
          }}
          showHidePassword
          returnKeyType="done"
          label={strings.password}
          autoCapitalize="none"
          value={this.state.passwordInputValue}
          errorText={this.state.passwordError}
        />

        <View style={styles.signUpContainer}>
          <CustomText
            size={16}
            title={strings.no_account}
            textColor={colors.light_gray} />

          <TouchableOpacity
            style={styles.signUpText}
            onPress={() => this.onSignUpClicked()}>
            <CustomText
              size={16}
              title={strings.sign_up}
              textColor={colors.green} />
          </TouchableOpacity>
        </View>

        <CustomButton
          textSize={18}
          isLoading={this.props.isLoading}
          onClick={() => this.onLoginButtonClicked()}
          disabled={this.state.loginButtonDisabled}
          buttonColor={colors.green}
          disabledColor={colors.button_disabled}
          title={strings.log_in}/>
      </View>
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

  renderLogoHeader = () => {
    return (
      <Logo title={'LOGO'}/>
    )
  };

  renderSocials = () => {
    return (
      <View style={styles.contentContainer} >
        <CustomText
          title={strings.log_in}
          size={toDp(18)}
          style={styles.loginText} />

        <View style={styles.socialsContainer}>
          <Social
            iconSize={32}
            onClick={() => this.onSocialIconClicked("google")}
            iconName={'sc-google-plus'}/>

          <Social
            iconSize={48}
            onClick={() => this.onSocialIconClicked("fb")}
            iconName={'sc-facebook'}/>

          <Social
            iconSize={40}
            onClick={() => this.onSocialIconClicked("vk")}
            iconName={'sc-vk'}/>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line}/>
          <CustomText
            title={strings.or}
            size={18}
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

  onSignUpClicked = () => {
    NavigationService.navigate('Registration')
  };

  focusNextField = id => {
    if (this.refs[id]) {
      this.refs[id].focus();
    }
  };

  onLoginButtonClicked = () => {
    if (TextUtils.isEmpty(this.state.loginInputValue)) {
      this.setState({
        loginError: strings.empty_field
      });
      return;
    }

    if (TextUtils.isEmpty(this.state.passwordInputValue)) {
      this.setState({
        passwordError: strings.empty_field
      });
      return;
    }

    if (this.state.passwordInputValue.length < 3) {
      this.setState({
        passwordError: strings.password_length_3
      });
      return;
    }

    // if (!TextUtils.isDigitsOnly(this.state.loginInputValue)) {
    //   this.setState({
    //     passwordError: strings.phone_wrong_format
    //   });
    //   return;
    // }

    const { loginInputValue, passwordInputValue} = this.state;

    let body = {
      email: loginInputValue,
      password: passwordInputValue
    };
    this.props.performLogin(body)
  }
}

export default connect(
  (state, props) => ({
    isLoading: state.login.isLoading,
    isCancelled: state.login.isCancelled,
    error: state.login.error,
  }),
  dispatch => ({
    performLogin: (body) => dispatch(actions.loginPerform(body)),
    cancelLogin: () => dispatch(actions.loginCancel()),
    loginErrorClear: () => dispatch(actions.loginErrorClear())
  }),
)(LoginScreen);
