import React from 'react'
import {StatusBar, View} from 'react-native';
import BaseComponent from '../../../../base/BaseComponent';
import styles from './style';
import {SafeAreaView} from "react-navigation";
import Toolbar from '../../../../components/Toolbar';
import strings from '../../../../../locales/strings';
import colors from '../../../../../utils/colors';
import NavigationService from '../../../../../navigation/NavigationService';
import {connect} from 'react-redux';
import {actions} from '../../../../../state/actions';

class MyOrdersScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getMyOrders(this.props.userLogin.id)
  }

  componentWillUnmount(): void {
    if (this.props.isLoading) {
      this.props.cancelGetMyOrders()
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderToolbar()}
      </SafeAreaView>
      )
  }

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.orders}
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
}

export default connect(
  (state, props) => ({
    user: state.profile.user,
    userLogin: state.profile.userLogin,
    orders: state.myOrders.orders,
    isLoading: state.myOrders.isLoading,
  }),
  dispatch => ({
    getMyOrders: (data) => dispatch(actions.getMyOrders(data)),
    cancelGetMyOrders: () => dispatch(actions.getMyOrdersCancel())
  }),
)(MyOrdersScreen);
