import React from 'react'
import BaseComponent from '../../base/BaseComponent';
import styles from './style';
import {SafeAreaView} from "react-navigation";
import {Image, ScrollView, StatusBar, View, TouchableOpacity, Share} from 'react-native';
import colors from '../../../colors';
import Swiper from '../../../libs/Swiper';
import {toDp} from '../../../utils/ScreenUtils';
import {connect} from 'react-redux';
import CustomText from '../../components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import NavigationService from '../../../navigation/NavigationService'
import {actions} from '../../../state/actions';
import StarRating from 'react-native-star-rating';

class ProductDetailsScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
      ],
      starCount: 0,
    };
  }

  componentDidMount(): void {
    const {navigation, getProduct} = this.props;
    const product = navigation.getParam('product', {});
    getProduct(product.id)
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderSlider()}
          {this.renderProductDescription()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderProductDescription = () => {
    const {product} = this.props;

    return(
      <View style={styles.productDescriptionContainer}>
        <CustomText
          size={20}
          fontStyle={'bold'}
          title={product && product.price}/>

        <CustomText
          size={20}
          fontStyle={'bold'}
          title={product.title} />

        <View>
          <StarRating
            buttonStyle={{marginRight: 10}}
            starSize={26}
            starColor={colors.green}
            emptyStarColor={'#E4E4E4'}
            disabled={false}
            maxStars={5}
            rating={this.state.starCount}
            fullStar={'star'}
            halfStar={'star-half'}
            emptyStar={'star-o'}
            iconSet={'FontAwesome'}
            selectedStar={(rating) => {
              this.setState({
                starCount: rating
              });
            }}
          />
        </View>
      </View>
    )
  };

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
            onPress={() => this.onShare()}>
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

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export default connect(
  (state, props) => ({
    product: state.product.product,
    isLoading: state.product.isLoading,
  }),
  dispatch => ({
    getProduct: query => dispatch(actions.getProductDetails(query))
  }),
)(ProductDetailsScreen);

