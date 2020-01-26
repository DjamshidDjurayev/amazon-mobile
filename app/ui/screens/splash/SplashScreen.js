import React from 'react'
import {View, StatusBar, Text} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {connect} from 'react-redux'
import {actions} from '../../../state/actions';
import styles from './style';
import BaseComponent from '../../base/BaseComponent';
import colors from '../../../utils/colors';

class SplashScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  componentWillUnmount(): void {
    // cancel timeout action
    if (this.props.isLoading) {
      this.props.cancelTimeout()
    }
  }

  componentDidMount(): void {
    this.props.startTimeout()
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderContent()}
      </SafeAreaView>
    );
  }

  renderStatusBar = () => {
    return(
      <StatusBar
        backgroundColor={colors.green}
        hidden={false}
        barStyle={'light-content'} />
    )
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
}

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
