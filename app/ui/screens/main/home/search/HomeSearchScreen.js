import React from 'react'
import {
  StatusBar, TouchableOpacity, View, FlatList
} from 'react-native';
import BaseComponent from '../../../../base/BaseComponent';
import styles from './style';
import colors from '../../../../../colors';
import {SafeAreaView} from "react-navigation";
import {connect} from 'react-redux';
import {actions} from '../../../../../state/actions';
import strings from '../../../../../locales/strings';
import Entypo from 'react-native-vector-icons/Entypo';
import {toDp} from '../../../../../utils/ScreenUtils';
import MainSearchView from '../../../../components/MainSearchView';
import NavigationService from '../../../../../navigation/NavigationService';
import TextUtils from '../../../../../utils/TextUtils';
import CustomText from '../../../../components/CustomText';
import HomeProductSearchItem from './HomeProductSearchItem';

class HomeSearchScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    const {navigation, searchProducts} = this.props;
    const query = navigation.getParam('query', null);
    const category = navigation.getParam('category', null);

    if (query) {
      searchProducts(query)
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderSearchView()}
        {this.renderSearchProducts()}
      </SafeAreaView>
    )
  }

  componentWillUnmount(): void {
    const {products, isLoading, searchProductsCancel, searchListClear} = this.props;

    if (isLoading) {
      searchProductsCancel();
    }

    if (products.length > 0) {
      searchListClear();
    }
  }

  renderSearchView = () => {
    const {isLoading, searchProducts, searchProductsCancel, searchListClear, navigation} = this.props;
    const query = navigation.getParam('query', null);
    const category = navigation.getParam('category', null);

    return(
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => this.onBackButtonClicked()}
          style={styles.backButtonContainer}>
          <Entypo
            style={styles.backButton}
            name={'chevron-thin-left'}
            size={toDp(20)}
            color={colors.black}/>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <MainSearchView
            isLoading={isLoading}
            onChange={value => {
              if (!TextUtils.isEmpty(value.trim())) {
                searchProducts(value)
              } else {
                if (isLoading) {
                  searchProductsCancel();
                  searchListClear();
                }
              }
            }}
            autoFocus
            defaultValue={query || ''}
            fontSize={toDp(16)}
            onSubmitEditing={() => this.onSubmitButtonClicked()}
            title={strings.what_to_find} />
        </View>
      </View>
    )
  };

  renderSearchProducts = () => {
    const {products, isLoading} = this.props;

    if (!isLoading) {
      if (products && products.length === 0) {
        return this.renderEmptyView()
      } else {
        return(
          <FlatList
            horizontal={false}
            numColumns={2}
            style={{flex: 1}}
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ index, item }) => this.renderProductItem(item, index)}/>
        )
      }
    }

    return null
  };

  renderEmptyView = () => {
    return(
      <View style={styles.emptyViewContainer}>
        <CustomText title={strings.no_results}/>
      </View>
    )
  };

  renderProductItem = (product, index) => {
    return(
      <HomeProductSearchItem
        index={index}
        product={product}
        onClick={() => {
          NavigationService.navigate('ProductDetails', {product})
      }}/>
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

  onSubmitButtonClicked = () => {
    // to do
  };
}

export default connect(
  (state, props) => ({
    products: state.home.searchProducts,
    isLoading: state.home.isLoading,
  }),
  dispatch => ({
    searchProducts: data => dispatch(actions.searchProducts(data)),
    searchProductsCancel: () => dispatch(actions.searchProductsCancel()),
    searchListClear: () => dispatch(actions.searchListClear())
  }),
)(HomeSearchScreen);

