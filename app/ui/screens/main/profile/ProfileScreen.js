import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {
  ScrollView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../../utils/colors';
import {connect} from 'react-redux';
import Toolbar from '../../../components/Toolbar';
import strings from '../../../../locales/strings';
import CustomText from '../../../components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo'
import {toDp} from '../../../../utils/ScreenUtils';
import MenuItem from '../../../components/MenuItem';
import Divider from '../../../components/Divider';
import NavigationService from '../../../../navigation/NavigationService'
import TextUtils from '../../../../utils/TextUtils';
import LanguageHelper from '../../../../utils/LanguageHelper';
import ActionSheetDialog from '../../../dialogs/ActionSheetDialog';

class ProfileScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderModals()}
        {this.renderStatusBar()}
        {this.renderToolbar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderProfileEdit()}
          {this.renderMyCoupons()}
          {this.renderOrdersAndFavorites()}
          {this.renderProfileSettings()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderModals = () => {
    const {locale, setLocale} = this.props.screenProps;
    return(
      <View>
        <ActionSheetDialog
          items={[
            { label: 'Русский', value: 'ru', selected: locale === 'ru' },
            { label: 'English', value: 'en', selected: locale === 'en', },
          ]}
          onValueChange={(item, index) => {
            setLocale(item.value)
          }}
          onCancel={() => {
            this.setState({
              showModal: false
            })
          }}
          visibility={this.state.showModal}/>
      </View>
    )
  };

  renderProfileSettings = () => {
    const {locale} = this.props.screenProps;

    return(
      <View style={styles.profileSettingsContainer}>
        <MenuItem
          onClick={() => this.onProfileItemClicked('notifications')}
          topBorder={true}
          bottomBorder={false}
          title={strings.notifications}/>
        <Divider />
        <MenuItem
          onClick={() => this.onProfileItemClicked('support')}
          topBorder={false}
          bottomBorder={false}
          title={strings.client_support}/>
        <Divider />
        <MenuItem
          onClick={() => this.onChangeLanguageClicked()}
          topBorder={false}
          bottomBorder={true}
          rightText={LanguageHelper.getFullLanguage(locale)}
          title={strings.app_language}/>
      </View>
    )
  };

  renderOrdersAndFavorites = () => {
    return(
      <View style={styles.ordersAndFavoritesContainer}>
        <MenuItem
          onClick={() => this.onOrdersClicked()}
          topBorder={true}
          bottomBorder={false}
          title={strings.orders}/>
        <Divider />
        <MenuItem
          onClick={() => this.onFavouritesClicked()}
          topBorder={false}
          bottomBorder={true}
          title={strings.favorites}/>
      </View>
    )
  };

  renderMyCoupons = () => {
    return(
      <MenuItem
        containerStyle={styles.myCouponsContainer}
        onClick={() => this.onCouponsClicked()}
        title={strings.my_coupons}/>
    )
  };

  renderProfileEdit = () => {
    const {user} = this.props;

    return(
      <TouchableOpacity
        onPress={() => this.onProfileItemClicked('edit_profile')}
        style={styles.profileEditContainer}>

        {user && user.image ? this.renderAvatar(user.image) : this.renderAvatarPlaceHolder()}

        <View style={styles.nameContainer}>
          <CustomText
            size={16}
            title={user && user.name}/>

          <CustomText
            style={{marginTop: toDp(4)}}
            textColor={colors.light_gray}
            size={14}
            title={user && user.surname}/>
        </View>

        <Entypo
          style={styles.rightIcon}
          name={'chevron-thin-right'}
          size={toDp(18)}
          color={colors.gray_5F}/>
      </TouchableOpacity>
    )
  };

  renderAvatarPlaceHolder = () => {
    const {user} = this.props;
    return(
      <View style={styles.avatarPlaceholder}>
        <CustomText
          textColor={colors.white}
          size={20}
          title={TextUtils.getInitialLetter(user && user.name)}/>
      </View>
    )
  };

  renderAvatar = image => {
    return(
      <Image
        style={styles.profileImage}
        source={{ uri: image}}/>
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.profile}
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

  onProfileItemClicked = id => {
    switch (id) {
      case 'edit_profile':
        NavigationService.navigate('ProfileSettings');
        break;

      case 'coupons':
        break;

      case 'orders':
        break;

      case 'favourites':
        break;

      case 'notifications':
        break;

      case 'support':
        break;

      case 'app_lang':
        break;
    }
  };

  onChangeLanguageClicked = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  };

  onOrdersClicked = () => {
    NavigationService.navigate('MyOrders')
  };

  onFavouritesClicked = () => {
    NavigationService.navigate('Favourites')
  };

  onCouponsClicked = () => {
    NavigationService.navigate('Coupons')
  };
}

export default connect(
  (state, props) => ({
    user: state.profile.user,
  }),
  dispatch => ({
  }),
)(ProfileScreen);
