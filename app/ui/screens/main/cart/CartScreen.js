import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {StatusBar, FlatList, View, ActivityIndicator} from "react-native";
import colors from '../../../../utils/colors';
import {connect} from 'react-redux';
import Toolbar from '../../../components/Toolbar';
import strings from '../../../../locales/strings';
import CartItem from './CartItem';
import CheckBox from '../../../components/CheckBox';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import {toDp} from '../../../../utils/ScreenUtils';
import NavigationService from '../../../../navigation/NavigationService'
import {actions} from '../../../../state/actions';

class CartScreen extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getCart()
  }

  componentWillUnmount(): void {
    if (this.props.isLoading) {
      this.props.cancelGetCart()
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderToolbar()}
        {this.renderBucketList()}
      </SafeAreaView>
    )
  }

  renderBucketList = () => {
    const {cart, isLoading} = this.props;

    if (isLoading) {
      return this.renderLoadingView();
    }

    return(
      <FlatList
        style={{flex: 1}}
        data={cart}
        contentContainerStyle={cart.length > 0 ? {} : {flex:1, paddingBottom: 50}}
        renderItem={this.renderBucketItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponentStyle={cart.length > 0 ? styles.headerContainer : {}}
        ListEmptyComponent={this.renderEmptyView}
        ListFooterComponent={this.renderFooter}
        horizontal={false}
      />
    )
  };

  renderLoadingView = () => {
    return(
      <View style={styles.loadingViewContainer}>
        <ActivityIndicator color={colors.black} size={toDp(30)}/>
      </View>
    )
  };

  renderFooter = () => {
    const {isLoading, cart} = this.props;

    if (isLoading || cart.length === 0) {
      return null;
    }

    return(
      <CustomButton
        disabledColor={colors.button_disabled}
        disabled={true}
        textSize={18}
        buttonColor={colors.green}
        style={{
          marginBottom: toDp(70),
          marginTop: toDp(22),
        }}
        title={strings.choose_product}/>
    )
  };

  renderEmptyView = () => {
    return(
      <View
        style={styles.emptyViewContainer}>
        <CustomText title={"Empty"}/>
      </View>
    )
  };

  renderHeaderContainer = () => {
    const {cart, isLoading} = this.props;

    if (isLoading || cart.length === 0) {
      return null;
    }

    return(
      <CheckBox
        title={strings.select_all} />
    )
  };

  renderBucketItem = ({item, index}) => {
    return(
      <CartItem
        onClick={() => this.onProductItemClicked(item, index)}
        index={index}
        item={item} />
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.bucket}
        backButtonEnabled
        onBackButtonClick={() => this.onBackButtonClicked()}
      />
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

  onProductItemClicked = ({item, index}) => {
    NavigationService.navigate('ProductDetails', {product: item})
  };
}

export default connect(
  (state, props) => ({
    cart: state.cart.cart,
    isLoading: state.cart.isLoading,
    userLogin: state.profile.userLogin,
  }),
  dispatch => ({
    getCart: () => dispatch(actions.getCart()),
    cancelGetCart: () => dispatch(actions.getCartCancel())
  }),
)(CartScreen);

