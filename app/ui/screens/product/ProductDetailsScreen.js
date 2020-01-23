import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import styles from './style';
import {SafeAreaView} from 'react-navigation';
import {Image, ScrollView, StatusBar, View, TouchableOpacity, Share} from 'react-native';
import colors from '../../../colors';
import Swiper from '../../../libs/Swiper';
import {toDp} from '../../../utils/ScreenUtils';
import {connect} from 'react-redux';
import CustomText from '../../components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import NavigationService from '../../../navigation/NavigationService';
import {actions} from '../../../state/actions';
import StarRating from 'react-native-star-rating';
import MenuItem from '../../components/MenuItem';
import strings from '../../../locales/strings';
import CustomButton from '../../components/CustomButton';
import Divider from '../../components/Divider';

class ProductDetailsScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  componentDidMount(): void {
    const {navigation, getProduct} = this.props;
    const product = navigation.getParam('product', {});
    console.log(product);
    getProduct(product.id);
  }

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderSlider()}
          {this.renderProductDescription()}
          {this.renderProductDetails()}
          {this.renderDeliveryInfo()}
          {this.renderRelatedProducts()}
          {this.renderCheckoutButton()}
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderCheckoutButton = () => {
    return (
      <CustomButton
        style={styles.checkoutButton}
        title={strings.checkout}/>
    );
  };

  renderRelatedProducts = () => {
    return (
      <View style={styles.relatedProductsContainer}>

      </View>
    );
  };

  renderDeliveryInfo = () => {
    return (
      <View style={styles.deliveryInfoContainer}>
        <MenuItem
          subTitleSize={14}
          textSize={12}
          textColor={colors.light_gray}
          subTitleColor={colors.black}
          title={'Бесплатно, стандартная доставка 15-45 д.'}
          subTitle={strings.delivery}/>
      </View>
    );
  };

  renderProductDetails = () => {
    const {product} = this.props;

    if (product) {
      return (
        <View style={styles.productDetailsContainer}>
          <MenuItem
            collapsible
            bottomBorder={false}
            title={strings.specifications}>
            <View style={{backgroundColor: colors.white, padding: 14}}>
              {product.table && product.table
                .filter(t => t.key && t.value)
                .map(t => {
                  return (
                    <View style={styles.tableRowContainer}>
                      <View style={styles.tableKeyContainer}>
                        <CustomText title={t.key} style={styles.tableKey} />
                        <View style={styles.dottedView}/>
                      </View>

                      <View style={styles.tableValueContainer}>
                        <View style={styles.dottedView}/>
                        <CustomText title={t.value} style={styles.tableValue}/>
                      </View>
                    </View>
                  );
                })}

              <View style={{marginTop: toDp(20)}}>
                {product.twister && product.twister.map(twister => {
                  if (twister.id === 'variation_size_name') {
                    return (
                      <View>
                        <CustomText title={twister.variationTitle}/>
                        {twister.data.map(size => {
                          return <CustomText title={size.title}/>;
                        })}
                      </View>
                    );
                  } else if (twister.id === 'variation_color_name') {
                    return (
                      <View>
                        <CustomText title={twister.variationTitle}/>
                        {twister.data.map(size => {
                          return (
                            <Image
                              style={styles.twisterImage}
                              source={{uri: size.src}}/>
                          );
                        })}
                      </View>
                    );
                  }
                })}
              </View>
            </View>
          </MenuItem>
          <Divider/>

          <MenuItem
            onClick={() => {
            }}
            collapsible
            topBorder={false}
            bottomBorder={false}
            title={strings.details}>
            <View style={{backgroundColor: colors.white, padding: 14}}>
              {product.features && product.features.map(item => {
                return(
                  <View style={{flexDirection: 'row'}}>
                    <View style={{
                      width: toDp(5),
                      height: toDp(5),
                      borderRadius: toDp(10),
                      backgroundColor: colors.black,
                      marginRight: toDp(6),
                    }}/>
                    <CustomText title={item} style={{
                      includeFontPadding: false,
                      textAlignVertical: 'center',
                    }}/>
                  </View>
                );
              })}
            </View>
          </MenuItem>
          <Divider/>

          <MenuItem
            onClick={() => {
            }}
            collapsible
            topBorder={false}
            bottomBorder={true}
            title={strings.payment_method}>
            <View style={{backgroundColor: colors.white, padding: 14}}>
              <CustomText title={'AXAXAXAXAXAXAXAX XAXAXAXAXAXAXAXAXA XAXAXAXAXAXAXA'}/>
            </View>
          </MenuItem>
        </View>
      );
    } else {
      return null;
    }
  };

  renderProductDescription = () => {
    const {product} = this.props;

    return (
      <View style={styles.productDescriptionContainer}>
        <CustomText
          size={20}
          fontStyle={'bold'}
          title={product && (product.price || product.price_placeholder)}/>

        <CustomText
          size={20}
          fontStyle={'bold'}
          title={product && product.title}/>

        <View style={{marginTop: 10}}>
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
                starCount: rating,
              });
            }}
          />
        </View>
      </View>
    );
  };

  renderSlider = () => {
    const {product} = this.props;
    let array = [];

    if (product && product.images) {
      array.push(product.images.mainImage);
    }

    return (
      <View style={styles.sliderContainer}>
        <Swiper
          height={toDp(280)}
          removeClippedSubviews={false}
          autoplay
          autoplayTimeout={10}
          renderPagination={this.renderPagination}
          loop>
          {array.map((image, index) => this.renderSliderItem(image, index))}
        </Swiper>

        {this.renderTopHeader()}
      </View>
    );
  };

  renderTopHeader = () => {
    return (
      <View style={styles.topHeaderContainer}>
        <View style={{flex: 1}}>
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
            onPress={() => {
            }}>
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
            onPress={() => {
            }}>
            <Entypo
              name={'dots-three-vertical'}
              size={toDp(24)}
              color={colors.white}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderDotsPagination = (index, total) => {
    let dots = [];
    for (let i = 0; i < total; i++) {
      dots.push(i === index ? this.renderActiveDot(i) : this.renderInactiveDot(i));
    }
    return (
      <View
        style={styles.dotsPaginationStyle}>
        {dots}
      </View>
    );
  };

  renderNumberPagination = (index, total) => {
    return (
      <View style={styles.numberPaginationStyle}>
        <CustomText
          textColor={colors.white}
          size={12}
          title={`${index + 1}/${total}`}/>
      </View>
    );
  };

  renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationContainer}>
        {this.renderDotsPagination(index, total)}
        {this.renderNumberPagination(index, total)}
      </View>
    );
  };

  renderSliderItem = (image, index) => {
    return (
      <Image
        key={index}
        style={styles.imageStyle}
        source={{uri: image}}
        resizeMode={'contain'}/>
    );
  };

  renderInactiveDot = index => {
    return (
      <View
        key={index}
        style={styles.inactiveDot}/>
    );
  };

  renderActiveDot = index => {
    return (
      <View
        key={index}
        style={styles.activeDot}/>
    );
  };

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        backgroundColor={'#DFDFDF80'}
        hidden={false}
        barStyle={'light-content'}/>
    );
  };

  onBackButtonClicked = () => {
    NavigationService.goBack();
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

function mapDispatchToProps(dispatch) {
  return {
    getProduct: id => dispatch(actions.getProductDetails(id)),
  };
}

function mapStateToProps(state, props) {
  const product = props.navigation.getParam('product', {});
  return {
    product: state.product.product[product.id],
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailsScreen);

