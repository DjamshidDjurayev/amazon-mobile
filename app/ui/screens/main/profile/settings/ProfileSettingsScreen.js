import React from 'react'
import BaseComponent from '../../../../base/BaseComponent';
import Toolbar from '../../../../components/Toolbar';
import strings from '../../../../../locales/strings';
import {
  ScrollView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import colors from '../../../../../colors';
import styles from './style';
import {SafeAreaView} from "react-navigation";
import NavigationService from '../../../../../navigation/NavigationService'
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {toDp} from '../../../../../utils/ScreenUtils';
import CustomText from '../../../../components/CustomText';
import MenuItem from '../../../../components/MenuItem';
import Divider from '../../../../components/Divider';
import {actions} from '../../../../../state/actions';
import TextUtils from '../../../../../utils/TextUtils';
import BottomSheet from '../../../../dialogs/BottomSheet';

class ProfileSettingsScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderToolbar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderSettingsHeader()}
          {this.renderPersonalData()}
          {this.renderChangePasswordAndExit()}
        </ScrollView>
        {this.renderBottomSheets()}
      </SafeAreaView>
    )
  }

  renderChangePasswordAndExit = () => {
    return(
      <View style={styles.changePasswordAndExitContainer}>
        <MenuItem
          onClick={() => this.onChangePasswordClicked()}
          bottomBorder={false}
          textColor={colors.blue}
          title={strings.change_password}/>
        <Divider />

        <MenuItem
          onClick={() => this.onLogoutClicked()}
          rightIconEnabled={false}
          topBorder={false}
          textColor={colors.red}
          title={strings.log_out}/>
      </View>
    )
  };

  renderPersonalData = () => {
    const {user} = this.props;

    return(
      <View style={styles.personalDataContainer}>
        <CustomText
          style={styles.personalDataTitle}
          size={18}
          title={strings.personalData}/>

        <MenuItem
          onClick={() => this.onEditNameClicked()}
          bottomBorder={false}
          subTitle={strings.name}
          title={user && (user.name + " " + user.surname)}/>
        <Divider />

        <MenuItem
          topBorder={false}
          bottomBorder={false}
          subTitle={strings.email}
          title={user && user.email}/>
        <Divider />

        <MenuItem
          topBorder={false}
          bottomBorder={false}
          subTitle={strings.phone}
          title={user && (TextUtils.getMaskedPhone(user.phoneNumber))}/>
        <Divider />

        <MenuItem
          topBorder={false}
          bottomBorder={true}
          subTitle={strings.delivery_address}
          title={strings.add_delivery_address}
          textColor={colors.blue}/>
      </View>
    )
  };

  renderSettingsHeader = () => {
    const {user} = this.props;
    return(
      <View style={styles.settingsHeaderContainer}>
        <View style={styles.imageContainer}>
          {user && user.image ? this.renderAvatar(user.image) : this.renderAvatarPlaceHolder()}
          <TouchableOpacity
            style={styles.addImageContainer}>
            <View style={styles.addImage}>
              <AntDesign
                name={'plus'}
                size={toDp(20)}
                color={colors.white}/>
            </View>
          </TouchableOpacity>
        </View>

        {/* name */}
        <CustomText
          style={styles.name}
          title={user && (user.name + " " + user.surname)}
          size={20}/>
      </View>
    )
  };

  renderAvatarPlaceHolder = () => {
    const {user} = this.props;
    return(
      <View style={styles.avatarPlaceholder}>
        <CustomText
          size={20}
          title={TextUtils.getInitialLetter(user && user.name)}/>
      </View>
    )
  };

  renderAvatar = image => {
    return(
      <Image
        style={styles.image}
        source={{ uri: image}}/>
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.profile_settings}
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

  renderBottomSheets = () => {
    return(
      <BottomSheet
        onCancelClick={() => this.NameDialog.close()}
        onSaveClick={(name, lastName) => {
          console.warn(lastName)
        }}
        inputRef={ref => this.NameDialog = ref} />
    )
  };

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };

  onLogoutClicked = () => {
    Alert.alert(null, strings.sure_to_logout, [{
      text: strings.cancel,
      onPress: () => null,
      style: 'cancel',
    }, {
      text: strings.yes,
      onPress: () => this.logOut()
    }],
      {
        cancelable: true
      });
  };

  logOut = () => {
    this.props.userLogout(this.props.userLogin.id);
  };

  onChangePasswordClicked = () => {

  };

  onEditNameClicked = () => {
    if (this.NameDialog) {
      this.NameDialog.open()
    }
  };
}

export default connect(
  (state, props) => ({
    user: state.profile.user,
    userLogin: state.profile.userLogin
  }),
  dispatch => ({
    userLogout: (data) => dispatch(actions.userLogout(data)),
    updateUserName: (data) => dispatch(actions.userUpdateNames(data))
  }),
)(ProfileSettingsScreen);
