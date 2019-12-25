import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillUnmount(): void {}

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.container} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default connect(
  (state, props) => ({}),
  dispatch => ({}),
)(SplashScreen);
