import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {ScrollView, StatusBar, View} from 'react-native';
import colors from '../../../../colors';
import {connect} from 'react-redux';
import CustomText from '../../../components/CustomText';
import MainSearchView from '../../../components/MainSearchView';
import ImageSlider from 'react-native-image-slider';

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
        <ImageSlider
          autoPlayWithInterval={3000}
          style={styles.slider}
          images={[
            'http://placeimg.com/640/480/any',
            'http://placeimg.com/640/480/any',
            'http://placeimg.com/640/480/any'
          ]}/>
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
            <CustomText title={'UZS'} />
          </View>
        </View>

        {/* main search view */}
        <MainSearchView style={styles.mainSearchView}/>
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
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(HomeScreen);
