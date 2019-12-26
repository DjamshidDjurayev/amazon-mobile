import React from 'react'
import {StyleSheet, View, StatusBar, Text} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {connect} from 'react-redux'
import Colors from '../../colors'
import EStyleSheet from 'react-native-extended-stylesheet';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillUnmount(): void {}

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderContent()}
      </SafeAreaView>
    );
  }

  renderStatusBar = () => {
    return <StatusBar hidden={true} />
  };

  renderContent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          LOGO
        </Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontSize: '60rem',
    fontWeight: 'bold',
  },
});

export default connect(
  (state, props) => ({}),
  dispatch => ({}),
)(SplashScreen);
