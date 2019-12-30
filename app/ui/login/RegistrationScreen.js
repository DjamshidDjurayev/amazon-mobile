import React from 'react'
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation'
import {actions} from '../../state/actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../colors';
import CustomText from '../components/CustomText';
import strings from '../../strings';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import {toDp} from '../../utils/ScreenUtils';
import CustomButton from '../components/CustomButton';
import TextUtils from '../../utils/TextUtils';
import CustomInput from '../components/CustomInput';

class RegistrationScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.inputs = {};

    this.state = {
      signUpButtonDisabled: true,
      nameInputValue: "",
      loginInputValue: "",
      passwordInputValue: "",
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}

        <View style={styles.container}>
          {/* header */}
          {this.renderLogoHeader()}

          {/* content */}
          {this.renderContent()}
        </View>
      </SafeAreaView>
    )
  }

  renderStatusBar = () => {
    return (
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
      <View style={styles.contentContainer}>
        <CustomText
          size={toDp(18)}
          style={styles.loginText}>
          {strings.registration}
        </CustomText>

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
            size={toDp(18)}
            style={styles.orText}>
            {strings.or}
          </CustomText>
        </View>

        {/* inputs */}
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
          onSubmitEditing={() => this.focusNextField('login_input_id')}
          style={styles.loginInput}/>

        <CustomInput
          inputRef={r => this.inputs['login_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(loginInputValue) => {
            this.setState({
              loginInputValue,
            })
          }}
          returnKeyType="next"
          value={this.state.loginInputValue}
          placeholder={strings.phone}
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
          style={styles.passwordInput}/>

        <CustomButton
          style={styles.registrationButton}
          disabled={this.state.signUpButtonDisabled}
          buttonColor={colors.green}
          disabledColor={colors.button_disabled}
          title={strings.sign_up}/>
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
    this.inputs[id].focus();
  };

  onSignUpClicked = () => {
    this.props.navigation.navigate("Registration")
  };
}

const styles = EStyleSheet.create({
  rootView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  logoText: {
    color: colors.white,
    fontSize: '50rem',
    fontWeight: 'bold',
    marginTop: '36rem',
    marginBottom: '16rem',
  },
  logoView: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {

  },
  loginText: {
    alignSelf: 'center',
    marginTop: '26rem',
    marginBottom: '20rem',
  },
  orContainer: {
    marginTop: '26rem',
    marginBottom: '20rem',
    justifyContent:'center', alignItems:'center'
  },
  orText: {
    backgroundColor: colors.ultra_light_gray,
    paddingLeft: '16rem',
    paddingRight: '16rem',
  },
  line: {
    height: '0.5rem',
    backgroundColor: colors.light_gray,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  socialsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: colors.green,
    borderRadius: '80rem',
    marginLeft: '10rem',
    marginRight: '10rem',
    height: '42rem',
    width: '42rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpContainer: {
    alignSelf: 'center',
    marginTop: '22rem',
    marginBottom: '22rem',
    flexDirection: 'row',
  },
  signUpText: {
    marginLeft: '4rem',
  },
  loginInput: {
    paddingTop: "14rem",
    paddingBottom: "14rem",
    paddingLeft: '16rem',
    paddingRight: '16rem',
    fontSize: "15rem",
    fontWeight: 'normal',
    backgroundColor: colors.white,
    borderRadius: '8rem',
    marginLeft: "16rem",
    marginRight: "16rem",
    marginBottom: '8rem',
  },
  passwordInput: {
    paddingTop: "14rem",
    paddingBottom: "14rem",
    paddingLeft: '16rem',
    paddingRight: '40rem',
    fontSize: "15rem",
    fontWeight: 'normal',
    backgroundColor: colors.white,
    borderRadius: '8rem',
  },
  registrationButton: {
    marginTop: '20rem'
  },
});

export default connect(
  (state, props) => ({
    isLoading: state.registration.isLoading,
    isCancelled: state.registration.isCancelled,
    response: state.registration.response,
  }),
  dispatch => ({
    performRegistration: () => dispatch(actions.registrationPerform()),
    cancelRegistration: () => dispatch(actions.registrationCancel()),
  }),
)(RegistrationScreen);
