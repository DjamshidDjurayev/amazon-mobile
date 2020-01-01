import React, {Component} from 'react'
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import styles from './style';
import colors from '../../../../colors';
import strings from '../../../../strings';
import Feather from 'react-native-vector-icons/Feather'
import {toDp} from '../../../../utils/ScreenUtils';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';

class OrderCheckoutScreen extends Component {
  static navigationOptions = {
    title: strings.order_checkout,
    headerStyle: {
      backgroundColor: colors.green,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderStatusBar = () => {
    return(
      <StatusBar
        translucent
        backgroundColor={colors.statusbar_transparent}
        hidden={false}
        barStyle={'light-content'} />
    )
  };

  renderContent = () => {
    return(
      <View style={styles.container}>
        {this.renderTop()}
        <CustomText
          style={{
            marginLeft: toDp(16),
            marginTop: toDp(10),
          }}
          size={16}
          title={strings.your_order} />
        {this.renderOrders()}
        {this.renderDeliveryInfo()}
        {this.renderOrderDetails()}
        {this.renderOrderButton()}
      </View>
    )
  };

  renderOrderButton = () => {
    return(
      <CustomButton
        style={styles.orderButton}
        onClick={() => this.onOrderButtonClicked()}
        buttonColor={colors.green}
        disabledColor={colors.button_disabled}
        title={strings.add_delivery_address}/>
    )
  };

  renderOrderDetails = () => {
    return(
      <View style={styles.orderDetailsContainer}>
        <CustomText
          size={15}
          title={strings.order_details} />

          <View style={{flex: 2, flexDirection: 'row', marginTop: toDp(10)}}>
            <View
              style={{flex: 0.3}}>
              <CustomText
                size={13}
                textColor={colors.light_gray}
                title={'Стоимость'}/>
            </View>

             <View
               style={{flex: 0.7, alignItems: 'flex-end'}}>
               <CustomText
                 size={13}
                 textColor={colors.light_gray}
                 title={'5 000 000 UZS'}/>
             </View>
          </View>

        <View style={{flex: 2, flexDirection: 'row', marginTop: toDp(10)}}>
          <View
            style={{flex: 0.3}}>
            <CustomText
              size={13}
              textColor={colors.light_gray}
              title={'Стоимость'}/>
          </View>

          <View
            style={{flex: 0.7, alignItems: 'flex-end'}}>
            <CustomText
              size={13}
              textColor={colors.light_gray}
              title={'5 000 000 UZS'}/>
          </View>
        </View>

        <View style={{flex: 2, flexDirection: 'row', marginTop: toDp(10)}}>
          <View
            style={{flex: 0.3}}>
            <CustomText
              size={13}
              textColor={colors.light_gray}
              title={'Стоимость'}/>
          </View>

          <View
            style={{flex: 0.7, alignItems: 'flex-end'}}>
            <CustomText
              size={13}
              textColor={colors.light_gray}
              title={'5 000 000 UZS'}/>
          </View>
        </View>

        <View style={{flex: 2, flexDirection: 'row', marginTop: toDp(10)}}>
          <View
            style={{flex: 0.3}}>
            <CustomText
              size={13}
              textColor={colors.light_gray}
              title={'Стоимость'}/>
          </View>

          <View
            style={{flex: 0.7, alignItems: 'flex-end'}}>
            <CustomText
              size={13}
              textColor={colors.light_gray}
              title={'5 000 000 UZS'}/>
          </View>
        </View>
      </View>
    )
  };

  renderDeliveryInfo = () => {
    return(
      <View style={styles.deliveryInfoContainer}>
        <CustomText title={strings.delivery} />
        <CustomText
          textColor={colors.light_gray}
          size={12}
          title={'Бесплатно, стандартная доставка 15-45 д.'} />
      </View>
    )
  };

  renderOrders = () => {
    return(
      <View style={styles.ordersContainer}>

        <TouchableOpacity>
          <CustomText title={'Xiaomi Mi 9 Pro'} />
        </TouchableOpacity>
      </View>
    )
  };

  renderTop = () => {
    return(
      <View style={styles.topContainer}>
        {/* add location */}
        <TouchableOpacity
          onPress={() => this.onAddLocationClicked()}
          style={[styles.topItemContainer, {
            borderTopRightRadius: toDp(12),
            borderTopLeftRadius: toDp(12),
            borderBottomColor: '#bfbfbf',
            borderBottomWidth: 0.5,
          }]}>

          <Feather
            style={styles.topLeftIcon}
            name={'map-pin'}
            size={toDp(22)}
            color={colors.green}/>

          <CustomText
            style={{flex: 1}}
            title={strings.add_delivery_address} />

           <Feather
             style={styles.topRightIcon}
             name={'chevron-right'}
             size={toDp(16)}
             color={colors.light_gray}/>
        </TouchableOpacity>

        {/* payment method */}
        <TouchableOpacity
          onPress={() => this.onPaymentMethodChoose()}
          style={[styles.topItemContainer, {
            borderBottomRightRadius: toDp(12),
            borderBottomLeftRadius: toDp(12),
          }]}>

          <Feather
            style={styles.topLeftIcon}
            name={'credit-card'}
            size={toDp(22)}
            color={colors.green}/>

          <CustomText
            style={{flex: 1}}
            title={strings.payment_method_choose} />

          <Feather
            style={styles.topRightIcon}
            name={'chevron-right'}
            size={toDp(16)}
            color={colors.light_gray}/>

        </TouchableOpacity>
      </View>
    )
  };

  onAddLocationClicked = () => {

  };

  onPaymentMethodChoose = () => {

  };

  onOrderButtonClicked = () => {

  };
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(OrderCheckoutScreen);
