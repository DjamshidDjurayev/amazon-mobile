import React from 'react'
import BaseComponent from '../../base/BaseComponent';
import styles from './style';
import {SafeAreaView} from "react-navigation";
import {Image, ScrollView, StatusBar, View, TouchableOpacity} from 'react-native';
import colors from '../../../colors';
import Swiper from '../../../libs/Swiper';
import {toDp} from '../../../utils/ScreenUtils';
import {connect} from 'react-redux';
import CustomText from '../../components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import * as NavigationService from '../../../navigation/NavigationService'

class ProductDetailsScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        "https://source.unsplash.com/1024x768/?tree",
        "https://source.unsplash.com/1024x768/?tree",
      ]
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderSlider()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderSlider = () => {
    return(
      <View style={styles.sliderContainer}>
        <Swiper
          height={toDp(280)}
          removeClippedSubviews={false}
          autoplay
          autoplayTimeout={10}
          renderPagination={this.renderPagination}
          loop>
          {this.state.images.map((image, index) => this.renderSliderItem(image, index))}
        </Swiper>

        {this.renderTopHeader()}
      </View>
    )
  };

  renderTopHeader = () => {
    return(
      <View style={styles.topHeaderContainer}>
          <View style={{flex: 1,}}>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => this.onBackButtonClicked()}>
              <Entypo
                name={'chevron-thin-left'}
                size={toDp(24)}
                color={colors.white}/>
            </TouchableOpacity>
          </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => {}}>
            <Entypo
              name={'heart-outlined'}
              size={toDp(24)}
              color={colors.white}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => {}}>
            <Feather
              name={'share-2'}
              size={toDp(24)}
              color={colors.white}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconStyle, {marginRight: 0}]}
            onPress={() => {}}>
            <Entypo
              name={'dots-three-vertical'}
              size={toDp(24)}
              color={colors.white}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  renderDotsPagination = (index, total) => {
    let dots = [];
    for (let i = 0; i < total; i++) {
      dots.push(i === index ? this.renderActiveDot(i) : this.renderInactiveDot(i))
    }
    return(
      <View
        style={styles.dotsPaginationStyle}>
        {dots}
      </View>
    )
  };

  renderNumberPagination = (index, total) => {
    return(
      <View style={styles.numberPaginationStyle}>
        <CustomText
          textColor={colors.white}
          size={12}
          title={`${index + 1}/${total}`}/>
      </View>
    )
  };

  renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationContainer}>
        {this.renderDotsPagination(index, total)}
        {this.renderNumberPagination(index, total)}
      </View>
    )
  };

  renderSliderItem = (image, index) => {
    return(
      <Image
        key={index}
        style={styles.imageStyle}
        source={{uri: image}}
        resizeMode={'cover'} />
    )
  };

  renderInactiveDot = index => {
    return (
      <View
        key={index}
        style={styles.inactiveDot}/>
    )
  };

  renderActiveDot = index => {
    return (
      <View
        key={index}
        style={styles.activeDot}/>
    )
  };

  renderStatusBar = () => {
    return(
      <StatusBar
        translucent
        backgroundColor={'#DFDFDF80'}
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
)(ProductDetailsScreen);

