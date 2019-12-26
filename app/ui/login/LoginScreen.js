import React from 'react'
import {
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import {actions} from '../../state/actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../colors';

class LoginScreen extends React.Component{
  render() {
    return (
      <View>
        <Text>
          AXAXAX2
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
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(LoginScreen);
