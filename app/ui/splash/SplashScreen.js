import React from 'react'
import {View, StatusBar, Text} from 'react-native'
import {SafeAreaView, StackActions, NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import colors from '../../colors'
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
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
}

const styles = EStyleSheet.create({
  rootView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
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
