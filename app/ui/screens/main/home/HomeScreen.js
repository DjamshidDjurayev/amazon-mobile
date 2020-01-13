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
import SliderItem from './SliderItem';

class HomeScreen extends BaseComponent {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);

    this.state = {
      images: [ {
        brand: require('../../../../assets/images/armani.png'),
        img: require('../../../../assets/images/offerArmani.png'),
        title: 'Reliability, quality, style - in this watch',
        subTitle: 'ARMANI - Watches',
      }, {
        brand: require('../../../../assets/images/beats.png'),
        img: require('../../../../assets/images/offerBeats.png'),
        title: 'Feeling new emotion with Beats headphones',
        subTitle: 'Beats - Solo3 Wireless',
      }]
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
          {this.state.images.map((item, index) => this.renderSliderItem(item, index))}
        </Swiper>
      </View>
    )
  };

  renderSliderItem = (item, index) => {
    return(
      <View style={styles.imageStyle}>
        <SliderItem
          img={item.img}
          brand={item.brand}
          subTitle={item.subTitle}
          title={item.title}/>
      </View>
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
          onChange={value => console.warn(value)}
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
