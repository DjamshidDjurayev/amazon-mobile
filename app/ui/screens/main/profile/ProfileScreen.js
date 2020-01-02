import React from 'react'
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from '../home/style';
import {ScrollView, StatusBar} from 'react-native';
import colors from '../../../../colors';
import {connect} from 'react-redux';

class ProfileScreen extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        <ScrollView keyboardShouldPersistTaps={'always'}>
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
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(ProfileScreen);
