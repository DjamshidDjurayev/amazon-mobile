import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import {StatusBar, FlatList, View} from "react-native";
import colors from '../../../../colors';
import {connect} from 'react-redux';
import Toolbar from '../../../components/Toolbar';
import strings from '../../../../lang/strings';
import CartItem from './CartItem';
import CheckBox from '../../../components/CheckBox';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import {toDp} from '../../../../utils/ScreenUtils';
import NavigationService from '../../../../navigation/NavigationService'

const items = Array.apply(null, Array(20)).map((v, i) => {
  return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1), title: 'Xiaomi 9 Redmi ' + i, empty: false };
});

class CartScreen extends BaseComponent {
  constructor(props) {
    super(props);
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
    return(
      <FlatList
        style={{flex: 1}}
        data={items}
        contentContainerStyle={items.length > 0 ? {} : {flex:1, paddingBottom: 50}}
        renderItem={this.renderBucketItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponentStyle={items.length > 0 ? styles.headerContainer : {}}
        ListHeaderComponent={this.renderHeaderContainer}
        ListEmptyComponent={this.renderEmptyView}
        ListFooterComponent={this.renderFooter}
        horizontal={false}
      />
    )
  };

  renderFooter = () => {
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

  renderHeader = () => {
    return(
      <CheckBox
        title={strings.select_all} />
    )
  };

  renderHeaderContainer = () => {
    return(
      <View style={{flex: 1}}>
        {items.length > 0 ? this.renderHeader() : null}
      </View>
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
    NavigationService.navigate('ProductDetails')
  };
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(CartScreen);

