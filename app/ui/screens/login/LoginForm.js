// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import CustomInput from '../../components/CustomInput';
// import TextUtils from '../../../utils/TextUtils';
// import strings from '../../../strings';
// import colors from '../../../colors';
// import styles from './style';
// import {TouchableOpacity, View} from 'react-native';
// import CustomText from '../../components/CustomText';
// import CustomButton from '../../components/CustomButton';
//
// let LoginForm = props => {
//   return(
//     <View>
//       <CustomInput
//         inputRef={r => this.inputs['login_input_id'] = r}
//         numberOfLines={1}
//         multiline={false}
//         blurOnSubmit={false}
//         onChangeText={(loginInputValue, extractedValue) => {
//           this.setState({
//             loginInputValue: extractedValue,
//             loginButtonDisabled: TextUtils.isEmpty(extractedValue),
//             loginError: '',
//           })
//         }}
//         mask={'+[00000] [000] [00] [00]'}
//         keyboardType={'numeric'}
//         returnKeyType="next"
//         errorText={this.state.loginError}
//         value={this.state.loginInputValue}
//         placeholder={strings.phone}
//         placeholderTextColor={colors.light_gray}
//         autoCapitalize="none"
//         onSubmitEditing={() => this.focusNextField('password_input_id')}
//         style={styles.loginInput}/>
//
//       <CustomInput
//         inputRef={r => this.inputs['password_input_id'] = r}
//         numberOfLines={1}
//         multiline={false}
//         onChangeText={(passwordInputValue) => {
//           this.setState({
//             passwordInputValue,
//             passwordError: '',
//           })
//         }}
//         errorText={this.state.passwordError}
//         showHidePassword
//         returnKeyType="done"
//         value={this.state.passwordInputValue}
//         placeholder={strings.password}
//         placeholderTextColor={colors.light_gray}
//         autoCapitalize="none"
//         style={styles.loginInput}/>
//
//       <View style={styles.signUpContainer}>
//         <CustomText
//           title={strings.no_account}
//           textColor={colors.light_gray} />
//
//         <TouchableOpacity
//           style={styles.signUpText}
//           onPress={() => this.onSignUpClicked()}>
//           <CustomText
//             title={strings.sign_up}
//             textColor={colors.green} />
//         </TouchableOpacity>
//       </View>
//
//       <CustomButton
//         isLoading={this.props.isLoading}
//         onClick={() => this.onLoginButtonClicked()}
//         disabled={this.state.loginButtonDisabled}
//         buttonColor={colors.green}
//         disabledColor={colors.button_disabled}
//         title={strings.log_in}/>
//     </View>
//   )
// };
//
// LoginForm = reduxForm({
//   form: 'contact_form'
// })(LoginForm);
//
// export default LoginForm
