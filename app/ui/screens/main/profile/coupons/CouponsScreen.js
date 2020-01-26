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

class CouponsScreen extends BaseComponent {
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
        {this.renderToolbar()}
      </SafeAreaView>
    )
  }

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.my_coupons}
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
  }),
  dispatch => ({
  }),
)(CouponsScreen);
