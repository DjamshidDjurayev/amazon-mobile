import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import styles from './style';
import {SafeAreaView} from 'react-navigation';
import {Image, StatusBar, View, TouchableOpacity, Share} from 'react-native';
import colors from '../../../utils/colors';
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
import fontHelper from '../../../utils/fontHelper';
import ParallaxScrollView from '../../../libs/ParallaxScrollView';
import TextUtils from '../../../utils/TextUtils';

class ProductDetailsScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      imageViewerShown: false,
    };
  }

  componentWillUnmount(): void {
    if (this.props.productFetching) {
      this.props.cancelProductFetching();
    }
  }

  componentDidMount(): void {
    const {navigation, getProduct} = this.props;
    const product = navigation.getParam('product', {});
    getProduct(product.id);
  }

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ParallaxScrollView
          headerBackgroundColor={colors.green}
          stickyHeaderHeight={toDp(58)}
          backgroundColor={colors.ultra_light_gray}
          contentBackgroundColor={colors.ultra_light_gray}
          style={styles.parallaxStyle}
          renderForeground={() => this.renderSlider()}
          renderStickyHeader={() => this.renderTopHeader()}
          parallaxHeaderHeight={toDp(280)}>
          <View>
            {this.renderProductDescription()}
            {this.renderProductDetails()}
            {this.renderDeliveryInfo()}
            {this.renderRelatedProducts()}
            {this.renderButtons()}
          </View>
        </ParallaxScrollView>
      </SafeAreaView>
    );
  }

  renderButtons = () => {
    return (
      <View>
        <CustomButton
          onClick={() => this.onAddToCartClicked()}
          style={styles.addToCartButton}
          title={strings.addToCart}/>
      </View>
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

  renderSpecifications = () => {
    const {product} = this.props;
    return (
      <View>
        {product && product.table ? (
          product.table
            .filter(t => t.key && t.value)
            .map(t => {
              return (
                <View style={styles.tableRowContainer}>
                  <View style={styles.tableKeyContainer}>
                    <CustomText
                      font={fontHelper.Lato_Bold}
                      title={t.key}
                      style={styles.tableKey}/>
                    <View style={styles.dottedView}/>
                  </View>

                  <View style={styles.tableValueContainer}>
                    <View style={styles.dottedView}/>
                    <CustomText title={t.value} style={styles.tableValue}/>
                  </View>
                </View>
              );
            })
        ) : this.renderEmptyView()}
      </View>
    );
  };


  renderEmptyView = () => {
    return (
      <View style={styles.emptyViewContainer}>
        <CustomText title={strings.empty}/>
      </View>
    )
  };

  renderTwister = () => {
    const {product} = this.props;
    return (
      <View style={{marginTop: toDp(20)}}>
        {product && product.twister ? (
          product.twister.map(twister => {
            if (twister.id === 'variation_size_name') {
              return (
                <View style={{flexDirection: 'row'}}>
                  <CustomText title={twister.variationTitle}/>
                  <View style={{flexDirection: 'row'}}>
                    {twister.data.map(size => {
                      return (
                        <TouchableOpacity>
                          <CustomText title={size.title}/>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            } else if (twister.id === 'variation_color_name') {
              return (
                <View>
                  <CustomText title={twister.variationTitle}/>
                  <View style={{flexDirection: 'row'}}>
                    {twister.data.map(size => {
                      return (
                        <TouchableOpacity>
                          <Image
                            resizeMode={'contain'}
                            style={styles.twisterImage}
                            source={{uri: size.src}}/>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            }
          })
        ) : this.renderEmptyView()}
      </View>
    );
  };

  renderSpecificationsContent = () => {
    return (
      <View style={styles.specificationsContainer}>
        {this.renderSpecifications()}
        {this.renderTwister()}
      </View>
    );
  };

  renderFeatures = () => {
    const {product} = this.props;
    return (
      <View style={styles.featuresContainer}>
        {product && product.features ? (
          product.features.map(item => {
            return (
              <View style={styles.featuresItemContainer}>
                <View style={styles.dotView}/>
                <CustomText title={item} style={styles.featuresItemTitle}/>
              </View>
            );
          })
        ) : this.renderEmptyView()}
      </View>
    );
  };

  renderPaymentMethods = () => {
    return (
      <View style={styles.paymentsContainer}>
        <CustomText title={'Payme'}/>
      </View>
    );
  };

  renderProductDetails = () => {
    return (
      <View style={styles.productDetailsContainer}>
        <MenuItem
          collapsible
          bottomBorder={false}
          title={strings.specifications}>
          {this.renderSpecificationsContent()}
        </MenuItem>
        <Divider/>
        <MenuItem
          collapsible
          topBorder={false}
          bottomBorder={false}
          title={strings.details}>
          {this.renderFeatures()}
        </MenuItem>
        <Divider/>
        <MenuItem
          collapsible
          topBorder={false}
          bottomBorder={true}
          title={strings.payment_method}>
          {this.renderPaymentMethods()}
        </MenuItem>
      </View>
    );
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

        <View style={{marginTop: 14, marginBottom: 10, alignItems: 'flex-start'}}>
          <StarRating
            buttonStyle={{marginRight: 10}}
            starSize={toDp(28)}
            fullStarColor={colors.green}
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

    if (product) {
      if (product.images && !TextUtils.isEmpty(product.images.mainImage)) {
        array.push(product.images.mainImage);
      } else if (!TextUtils.isEmpty(product.image)) {
        array.push(product.image);
      }
    }

    return (
      <>
        <Swiper
          style={styles.slider}
          height={toDp(280)}
          removeClippedSubviews={false}
          autoplay
          autoplayTimeout={10}
          renderPagination={this.renderPagination}
          loop>
          {array.map((image, index) => this.renderSliderItem(image, index))}
        </Swiper>
      </>
    );
  };

  renderTopHeader = () => {
    const {isFavourite} = this.props;
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
            style={[styles.iconStyle, {
              backgroundColor: isFavourite ? colors.green : colors.divider_transparent,
            }]}
            onPress={() => this.onAddToWishlistClicked()}>
            <Entypo
              name={isFavourite ? 'heart' : 'heart-outlined'}
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

  renderPagination = (index, total) => {
    return (
      <View style={styles.paginationContainer}>
        {this.renderDotsPagination(index, total)}
        {this.renderNumberPagination(index, total)}
      </View>
    );
  };

  renderSliderItem = (image, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => {
      }}>
        <Image
          style={styles.imageStyle}
          source={{uri: image}}
          resizeMode={'contain'}/>
      </TouchableOpacity>
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
        backgroundColor={colors.statusbar_transparent}
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

  onAddToWishlistClicked = add => {
    const {isFavourite} = this.props;
    const product = this.props.navigation.getParam('product', {});

    if (!this.props.isLoading) {
      if (isFavourite) {
        this.props.removeFromWishList(product.id);
      } else {
        this.props.addToWishList(this.props.product, product.id);
      }
    }
  };

  onAddToCartClicked = () => {
    const product = this.props.navigation.getParam('product', {});

    if (!this.props.isLoading) {
      this.props.addToCart(this.props.product);
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: id => dispatch(actions.getProductDetails(id)),
    addToCart: product => dispatch(actions.addToCart(product)),
    addToWishList: (product, id) => dispatch(actions.addToFavourites(product, id)),
    removeFromWishList: id => dispatch(actions.removeFromFavourites(id)),
    cancelProductFetching: () => dispatch(actions.getProductDetailsCancel()),
  };
}

function mapStateToProps(state, props) {
  const product = props.navigation.getParam('product', {});
  return {
    product: state.product.product[product.id] || product,
    isLoading: state.addToCart.isLoading,
    error: state.addToCart.error,
    isFavourite: state.favourites.favourites[product.id],
    productFetching: state.product.isLoading,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailsScreen);

