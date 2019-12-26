import React from 'react'
import {View, StatusBar, Text} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {connect} from 'react-redux'
import Colors from '../../colors'
import EStyleSheet from 'react-native-extended-stylesheet';
import {actions} from '../../state/actions';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillUnmount(): void {
    // cancel timeout action
    if (this.props.isLoading) {
      this.props.cancelTimeout()
    }
  }

  componentDidMount(): void {
    this.props.startTimeout()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isFinished) {
      this.navigateToNextScreen()
    }
  }

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
  };

  navigateToNextScreen = () => {
    this.props.navigation.navigate("Login");
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
  (state, props) => ({
    isLoading: state.splash.isLoading,
    isCancelled: state.splash.isCancelled,
    isFinished: state.splash.isFinished,
  }),
  dispatch => ({
    startTimeout: () => dispatch(actions.runSplashTimeout()),
    cancelTimeout: () => dispatch(actions.cancelSplashTimeout())
  }),
)(SplashScreen);
