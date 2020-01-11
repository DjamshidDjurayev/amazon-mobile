import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {ScrollView, StatusBar, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../../colors';
import {connect} from 'react-redux';
import Toolbar from '../../../components/Toolbar';
import strings from '../../../../strings';
import CustomText from '../../../components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo'
import {toDp} from '../../../../utils/ScreenUtils';
import MenuItem from '../../../components/MenuItem';
import Divider from '../../../components/Divider';
import * as NavigationService from '../../../../navigation/NavigationService'

class ProfileScreen extends BaseComponent {
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
          {this.renderProfileEdit()}
          {this.renderMyCoupons()}
          {this.renderOrdersAndFavorites()}
          {this.renderProfileSettings()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderProfileSettings = () => {
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
          onClick={() => this.onProfileItemClicked('app_lang')}
          topBorder={false}
          bottomBorder={true}
          rightText={'Русский'}
          title={strings.app_language}/>
      </View>
    )
  };

  renderOrdersAndFavorites = () => {
    return(
      <View style={styles.ordersAndFavoritesContainer}>
        <MenuItem
          onClick={() => this.onProfileItemClicked('orders')}
          topBorder={true}
          bottomBorder={false}
          title={strings.orders}/>

        <Divider />

        <MenuItem
          onClick={() => this.onProfileItemClicked('favourites')}
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
        onClick={() => this.onProfileItemClicked('coupons')}
        title={strings.my_coupons}/>
    )
  };

  renderProfileEdit = () => {
    const {user} = this.props;

    return(
      <TouchableOpacity
        onPress={() => this.onProfileItemClicked('edit_profile')}
        style={styles.profileEditContainer}>
        <Image
          source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}
          style={styles.profileImage} />

        <View style={styles.nameContainer}>
          <CustomText
            size={15}
            title={user && user.name}/>

          <CustomText
            textColor={colors.light_gray}
            size={13}
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
}

export default connect(
  (state, props) => ({
    user: state.profile.user
  }),
  dispatch => ({
  }),
)(ProfileScreen);
