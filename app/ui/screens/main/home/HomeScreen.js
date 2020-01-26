import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {ScrollView, StatusBar, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../../utils/colors';
import {connect} from 'react-redux';
import CustomText from '../../../components/CustomText';
import MainSearchView from '../../../components/MainSearchView';
import Swiper from '../../../../libs/Swiper'
import {toDp} from '../../../../utils/ScreenUtils';
import strings from '../../../../locales/strings';
import LanguageSelector from '../../../components/LanguageSelector';
import SliderItem from './SliderItem';
import {actions} from '../../../../state/actions';
import NavigationService from '../../../../navigation/NavigationService';
import HomeProductItem from './HomeProductItem';
import BrandItem from './BrandItem';

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
        url: "watches"
      }, {
        brand: require('../../../../assets/images/beats.png'),
        img: require('../../../../assets/images/offerBeats.png'),
        title: 'Feeling new emotion with Beats headphones',
        subTitle: 'Beats - Solo3 Wireless',
        url: "wireless+headphone"
      }]
    };
  }

  componentDidMount(): void {
    const {products, getHomeProducts} = this.props;

    getHomeProducts(products.empty)
  }

  componentWillUnmount(): void {
    const {isLoading, cancelFetchingProducts} = this.props;

    if (isLoading) {
      cancelFetchingProducts()
    }
  }

  render() {
    const {products, phones} = this.props;

    console.log(products.products3.newProducts)
    console.log(phones)

    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderHeader()}
          {this.renderSlider()}
          {this.renderProducts('Accessors', products.products1.accessors)}
          {this.renderProducts('Kross', products.products2.kross)}
          {this.renderProducts('New Products', products.products3.newProducts)}
          {this.renderProducts('New Cellphones', phones)}
          {this.renderPopularBrands()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderPopularBrands = () => {
    const {brands} = this.props;

    return(
      <View style={styles.popularBrandsContainer}>
        <CustomText
          fontStyle={'bold'}
          size={18}
          style={styles.popularBrandsTitle}
          title={strings.popularBrands}/>

        <ScrollView horizontal={true}>
          {brands && brands.map((item, index) => {
            return(
              <View key={index}>
                <BrandItem
                  onClick={() => this.onHomeProductItemClicked(item.title)}
                  index={index}
                  item={item}/>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  };

  renderProducts = (title, products) => {
    const {isLoading} = this.props;

    return(
      <View>
        <View style={styles.productsTitleContainer}>
          <CustomText
            size={16}
            fontStyle={'bold'}
            title={title}/>

          <TouchableOpacity onPress={() => this.onSeeAllClicked()}>
            <CustomText
              textColor={colors.blue}
              size={14}
              title={strings.see_all}/>
          </TouchableOpacity>
        </View>
        {isLoading ? this.renderLoadingView() : this.renderHorizontalProducts(products)}
      </View>
    )
  };

  renderLoadingView = () => {
    return(
      <View style={styles.loadingView}>
        <ActivityIndicator
          color={colors.black}
          size={toDp(34)}/>
      </View>
    )
  };

  renderHorizontalProducts = products => {
    return(
      <ScrollView horizontal={true}>
        {products && products.map((item, index) => {
          return(
            <View key={index}>
              <HomeProductItem
                onClick={() => this.onHomeProductItemClicked(item.title)}
                index={index}
                item={item}/>
            </View>
          )
        })}
      </ScrollView>
    )
  };

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
      <View
        key={index}
        style={styles.imageStyle}>
        <SliderItem
          onClick={() => this.onHomeProductItemClicked(item.url)}
          item={item}/>
      </View>
    )
  };

  renderHeader = () => {
    return(
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <CustomText
            style={styles.logo}
            title={'LOGO'}
            size={22}
            textColor={colors.white}/>
          <View style={styles.langContainer}>
            <LanguageSelector />
          </View>
        </View>

        {/* main search view */}
        <MainSearchView
          fontSize={16}
          onClick={() => {
            NavigationService.navigate('HomeSearch')
          }}
          editable={false}
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

  renderInactiveDot = () => {
    return (
      <View style={styles.inactiveDot}/>
    )
  };

  renderActiveDot = () => {
    return (
      <View style={styles.activeDot}/>
    )
  };

  onSeeAllClicked = () => {
    // make api call or do something
  };

  onHomeProductItemClicked = query => {
    NavigationService.navigate('HomeSearch', {query})
  };
}

export default connect(
  (state, props) => ({
    products: state.homeProducts.homeProducts,
    phones: state.product.phones,
    isLoading: state.homeProducts.isLoading,
    brands: state.product.brands,
  }),
  dispatch => ({
    getHomeProducts: loading => dispatch(actions.getHomeProducts(loading)),
    cancelFetchingProducts: () => dispatch(actions.getHomeProductsCancel())
  }),
)(HomeScreen);
