import React from 'react'
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-navigation'
import {actions} from '../../state/actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../colors';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderContent()}
      </SafeAreaView>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        backgroundColor='#00000022'
        hidden={false}
        barStyle={'light-content'} />
      )
  };

  renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Text style={styles.logoText}>
            LOGO
          </Text>
        </View>
      </View>
    )
  };
}

const styles = EStyleSheet.create({
  rootView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: Colors.ultra_light_gray,
  },
  logoText: {
    color: Colors.white,
    fontSize: '50rem',
    fontWeight: 'bold',
    marginTop: '36rem',
    marginBottom: '16rem',
  },
  logoView: {
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(LoginScreen);
