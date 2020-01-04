import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from '../home/style';
import {StatusBar} from "react-native";
import colors from '../../../../colors';
import {connect} from 'react-redux';
import Toolbar from '../../../components/Toolbar';
import strings from '../../../../strings';

class CartScreen extends BaseComponent {
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

  };

}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(CartScreen);

