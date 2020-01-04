import React from 'react'
import BaseComponent from '../../../../base/BaseComponent';
import Toolbar from '../../../../components/Toolbar';
import strings from '../../../../../strings';
import {ScrollView, StatusBar, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../../../colors';
import styles from './style';
import {SafeAreaView} from "react-navigation";
import * as NavigationService from '../../../../../navigation/NavigationService'
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {toDp} from '../../../../../utils/ScreenUtils';
import CustomText from '../../../../components/CustomText';
import MenuItem from '../../../../components/MenuItem';
import Divider from '../../../../components/Divider';

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
      </SafeAreaView>
    )
  }

  renderChangePasswordAndExit = () => {
    return(
      <View style={styles.changePasswordAndExitContainer}>
        <MenuItem
          bottomBorder={false}
          textColor={colors.blue}
          title={strings.change_password}/>
        <Divider />

        <MenuItem
          rightIconEnabled={false}
          topBorder={false}
          textColor={colors.red}
          title={strings.log_out}/>
      </View>
    )
  };

  renderPersonalData = () => {
    return(
      <View style={styles.personalDataContainer}>
        <CustomText
          style={styles.personalDataTitle}
          size={18}
          title={strings.personalData}/>

        <MenuItem
          bottomBorder={false}
          subTitle={strings.name}
          title={'Andy Larkin'}/>
        <Divider />

        <MenuItem
          topBorder={false}
          bottomBorder={false}
          subTitle={strings.email}
          title={'andy.larkin@gmail.com'}/>
        <Divider />

        <MenuItem
          topBorder={false}
          bottomBorder={false}
          subTitle={strings.phone}
          title={'+998 97 450 00 00'}/>
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
    return(
      <View style={styles.settingsHeaderContainer}>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://source.unsplash.com/1024x768/?nature'}}/>

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
          title={'Andy Larkin'}
          size={20}/>
      </View>
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

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(ProfileSettingsScreen);
