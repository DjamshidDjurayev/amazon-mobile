import React from 'react'
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import strings from '../../../../strings';
import colors from '../../../../colors';
import styles from './style';
import {connect} from 'react-redux';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import {toDp} from '../../../../utils/ScreenUtils';
import CustomButton from '../../../components/CustomButton';
import BaseComponent from '../../../base/BaseComponent';

class AddAddressScreen extends BaseComponent {
  static navigationOptions = {
    title: strings.add_delivery_address,
    headerStyle: {
      backgroundColor: colors.green,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      nameInputValue: '',
      lastNameInputValue: '',
      emailInputValue: '',
      phoneInputValue: '',
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderContent = () => {
    return(
      <View style={styles.container}>
        {this.renderContactInfo()}
        {this.renderDeliveryAddressInfo()}
        {this.renderSaveButton()}
      </View>
    )
  };

  renderSaveButton = () => {
    return(
      <CustomButton
        style={styles.saveButton}
        onClick={() => this.onSaveButtonClicked()}
        disabledColor={colors.button_disabled}
        buttonColor={colors.green}
        title={strings.save} />
    )
  };

  renderDeliveryAddressInfo = () => {
    return(
      <View style={styles.deliveryAddressContainer}>
        <CustomText
          style={{marginBottom: toDp(10)}}
          size={15}
          title={strings.delivery_address}/>

        <CustomInput
          inputRef={r => this.inputs['name_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(nameInputValue) => {
            this.setState({
              nameInputValue,
            })
          }}
          returnKeyType="next"
          value={this.state.nameInputValue}
          placeholder={strings.name}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('last_name_input_id')}
          style={styles.input}/>

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
          style={styles.input}/>

        <CustomInput
          inputRef={r => this.inputs['phone_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(phoneInputValue) => {
            this.setState({
              phoneInputValue,
            })
          }}
          keyboardType={'numeric'}
          returnKeyType="next"
          value={this.state.phoneInputValue}
          placeholder={strings.phone}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('email_input_id')}
          style={styles.input}/>

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
          style={styles.input}/>
      </View>
    )
  };

  renderContactInfo = () => {
    return(
      <View style={styles.contactInfoContainer}>
        <CustomText
          style={{marginBottom: toDp(10)}}
          size={15}
          title={strings.contact_info}/>

        <CustomInput
          inputRef={r => this.inputs['name_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(nameInputValue) => {
            this.setState({
              nameInputValue,
            })
          }}
          returnKeyType="next"
          value={this.state.nameInputValue}
          placeholder={strings.name}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('last_name_input_id')}
          style={styles.input}/>

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
          style={styles.input}/>

        <CustomInput
          inputRef={r => this.inputs['phone_input_id'] = r}
          numberOfLines={1}
          multiline={false}
          blurOnSubmit={false}
          onChangeText={(phoneInputValue) => {
            this.setState({
              phoneInputValue,
            })
          }}
          keyboardType={'numeric'}
          returnKeyType="next"
          value={this.state.phoneInputValue}
          placeholder={strings.phone}
          placeholderTextColor={colors.light_gray}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('email_input_id')}
          style={styles.input}/>

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
          style={styles.input}/>
      </View>
    )
  };

  renderStatusBar = () => {
    return(
      <StatusBar
        translucent
        backgroundColor={colors.statusbar_transparent}
        hidden={false}
        barStyle={'light-content'} />
    )
  };

  focusNextField = id => {
    this.inputs[id].focus();
  };

  onSaveButtonClicked = () => {

  };
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(AddAddressScreen);
