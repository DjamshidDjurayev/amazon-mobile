import React from 'react'
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView, Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation'
import {actions} from '../../../state/actions';
import colors from '../../../utils/colors';
import CustomText from '../../components/CustomText';
import strings from '../../../locales/strings';
import {toDp} from '../../../utils/ScreenUtils';
import CustomButton from '../../components/CustomButton';
import TextUtils from '../../../utils/TextUtils';
import styles from './style';
import BaseComponent from '../../base/BaseComponent';
import Logo from '../../components/Logo';
import Social from '../../components/Social';
import TextInputLayout from '../../components/floating/TextInputLayout';

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

      nameInputError: "",
      lastNameInputError: "",
      phoneInputError: "",
      passwordInputError: "",
      emailInputError: "",
    }
  }

  componentWillUnmount(): void {
    if (this.props.isLoading) {
      this.props.cancelRegistration()
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.error !== this.props.error) {
      if (this.props.error) {
        Alert.alert(null, this.props.error.message, [
          {
            text: strings.ok,
            onPress: () => {
              this.props.registrationErrorClear()
            },
          }
        ], {
          cancelable: true,
          onDismiss: () => {
            this.props.registrationErrorClear()
          }
        })
      }
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
        <TextInputLayout
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(nameInputValue) => {
            this.setState({
              nameInputValue,
              signUpButtonDisabled: TextUtils.isEmpty(nameInputValue),
              nameInputError: '',
            })
          }}
          returnKeyType="next"
          errorText={this.state.nameInputError}
          value={this.state.nameInputValue}
          label={strings.name}
          onSubmitEditing={() => this.focusNextField('last_name_id')}
          wrapperStyle={styles.input} />

        <TextInputLayout
          ref="last_name_id"
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(lastNameInputValue) => {
            this.setState({
              lastNameInputValue,
              lastNameInputError: '',
            })
          }}
          returnKeyType="next"
          errorText={this.state.lastNameInputError}
          value={this.state.lastNameInputValue}
          label={strings.lastName}
          placeholderTextColor={colors.light_gray}
          onSubmitEditing={() => this.focusNextField('phone_input_id')}
          wrapperStyle={styles.input} />

        <TextInputLayout
          ref="phone_input_id"
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(value, extractedValue) => {
            this.setState({
              phoneInputValue: extractedValue,
              phoneInputError: '',
            });
          }}
          mask={'+[00000] [000] [00] [00]'}
          keyboardType={'numeric'}
          returnKeyType="next"
          errorText={this.state.phoneInputError}
          value={this.state.phoneInputValue}
          label={strings.phone}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('email_input_id')}
          wrapperStyle={styles.input} />

        <TextInputLayout
          ref="email_input_id"
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(emailInputValue) => {
            this.setState({
              emailInputValue,
              emailInputError: '',
            })
          }}
          returnKeyType="next"
          errorText={this.state.emailInputError}
          value={this.state.emailInputValue}
          label={strings.email}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('password_input_id')}
          wrapperStyle={styles.input} />

        <TextInputLayout
          ref="password_input_id"
          showHidePassword
          numberOfLines={1}
          multiline={false}
          onChangeText={(passwordInputValue) => {
            this.setState({
              passwordInputValue,
              passwordInputError: '',
            })
          }}
          returnKeyType="done"
          errorText={this.state.passwordInputError}
          value={this.state.passwordInputValue}
          label={strings.password}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          wrapperStyle={styles.input} />

        <CustomButton
          textSize={18}
          isLoading={this.props.isLoading}
          onClick={() => this.onSignUpClicked()}
          style={styles.registrationButton}
          disabled={this.state.signUpButtonDisabled}
          buttonColor={colors.green}
          disabledColor={colors.button_disabled}
          title={strings.sign_up} />
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
    if (this.refs[id]) {
      this.refs[id].focus();
    }
  };

  onSignUpClicked = () => {
    const {
      nameInputValue,
      lastNameInputValue,
      phoneInputValue,
      passwordInputValue,
      emailInputValue,
    } = this.state;

    if (TextUtils.isEmpty(nameInputValue)) {
      this.setState({
        nameInputError: strings.empty_field
      });
      return;
    }

    if (TextUtils.isEmpty(lastNameInputValue)) {
      this.setState({
        lastNameInputError: strings.empty_field
      });
      return;
    }

    if (TextUtils.isEmpty(phoneInputValue)) {
      this.setState({
        phoneInputError: strings.empty_field
      });
      return;
    }


    if (!TextUtils.isEmpty(emailInputValue)) {
      this.setState({
        emailInputError: strings.empty_field
      });
      return;
    }

    if (!TextUtils.isEmpty(passwordInputValue)) {
      this.setState({
        passwordInputError: strings.empty_field
      });
      return;
    }

    if (!TextUtils.validateEmail(emailInputValue)) {
      this.setState({
        emailInputError: strings.wrong_email
      });
      return;
    }

    if (passwordInputValue.length < 3) {
      this.setState({
        passwordInputError: strings.password_length_3
      });
      return;
    }

    let body = {
      name: nameInputValue,
      surname: lastNameInputValue,
      phoneNumber: "+" + phoneInputValue.toString(),
      email: emailInputValue,
      password: passwordInputValue
    };
    this.props.performRegistration(body)
  };
}

export default connect(
  (state, props) => ({
    isLoading: state.registration.isLoading,
    isCancelled: state.registration.isCancelled,
    error: state.registration.error,
  }),
  dispatch => ({
    performRegistration: (data) => dispatch(actions.registrationPerform(data)),
    cancelRegistration: () => dispatch(actions.registrationCancel()),
    registrationErrorClear: () => dispatch(actions.registrationErrorClear())
  }),
)(RegistrationScreen);
