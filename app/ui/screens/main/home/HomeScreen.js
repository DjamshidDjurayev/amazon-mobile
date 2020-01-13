import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {ScrollView, StatusBar, View} from 'react-native';
import colors from '../../../../colors';
import {connect} from 'react-redux';
import CustomText from '../../../components/CustomText';
import MainSearchView from '../../../components/MainSearchView';
import Swiper from '../../../../libs/Swiper'
import {toDp} from '../../../../utils/ScreenUtils';
import strings from '../../../../locales/strings';
import LanguageSelector from '../../../components/LanguageSelector';
import FastImage from 'react-native-fast-image'

class HomeScreen extends BaseComponent {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
      ]
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderHeader()}
          {this.renderSlider()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderSlider = () => {
    return(
      <View style={styles.sliderContainer}>
        <Swiper
          paginationStyle={styles.paginationStyle}
          dot={this.renderInactiveDot()}
          activeDot={this.renderActiveDot()}
          height={toDp(180)}
          removeClippedSubviews={false}
          autoplay
          autoplayTimeout={10}
          loop>
          {this.state.images.map((image, index) => this.renderSliderItem(image, index))}
        </Swiper>
      </View>
    )
  };

  renderSliderItem = (image, index) => {
    return(
      <FastImage
        key={index}
        style={styles.imageStyle}
        source={{uri: image}}
        resizeMode={FastImage.resizeMode.cover}/>
    )
  };

  renderHeader = () => {
    return(
      <View style={styles.headerContainer}>
        {/* logo container */}
        <View style={styles.logoContainer}>
          {/* logo view */}
          <CustomText style={styles.logo} title={'LOGO'} size={22} textColor={colors.white}/>

          {/* languages */}
          <View style={styles.langContainer}>
            <LanguageSelector />
          </View>
        </View>

        {/* main search view */}
        <MainSearchView
          title={strings.search}
          style={styles.mainSearchView}/>
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

  renderInactiveDot() {
    return (
      <View style={styles.inactiveDot}/>
    )
  }

  renderActiveDot() {
    return (
      <View style={styles.activeDot}/>
    )
  }
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(HomeScreen);
