import React from 'react'
import {ScrollView, StatusBar, TouchableOpacity, View, Image} from 'react-native';
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

class HomeSearchScreen extends BaseComponent {
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
        {this.renderSearchView()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderSearchProducts()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderSearchView = () => {
    const {isLoading} = this.props;

    return(
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => this.onBackButtonClicked()}
          style={styles.backButtonContainer}>
          <Entypo
            name={'chevron-thin-left'}
            size={toDp(20)}
            color={colors.black}/>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <MainSearchView
            isLoading={isLoading}
            onChange={value => {
              if (!TextUtils.isEmpty(value)) {
                this.props.searchProducts(value)
              }
            }}
            autoFocus
            fontSize={toDp(16)}
            title={strings.what_to_find} />
        </View>
      </View>
    )
  };

  renderSearchProducts = () => {
    const {products} = this.props;

    return(
      <View style={{flex: 1}}>
        {products && products.map((product, index) => {
          return this.renderProductItem(product, index)
        })}
      </View>
    )
  };

  renderProductItem = (product, index) => {
    return(
      <View style={{
        backgroundColor: colors.white,
        borderRadius: toDp(14),
        marginTop: toDp(10),
        marginLeft: toDp(8),
        marginRight: toDp(8),
        padding: toDp(10),
      }}>
        <Image
          style={{width: null, height: 60}}
          resizeMode={'contain'}
          source={{ uri: product.image}}/>
        <CustomText title={product.title}/>
        <CustomText title={product.price}/>
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

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };
}

export default connect(
  (state, props) => ({
    products: state.home.searchProducts,
    isLoading: state.home.isLoading,
  }),
  dispatch => ({
    searchProducts: data => dispatch(actions.searchProducts(data))
  }),
)(HomeSearchScreen);

