import React, {Component} from 'react'
import {
  View
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'
import colors from '../../colors';

class Divider extends Component {
  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: colors.divider
  };

  render() {
    const {color} = this.props;

    return(
      <View style={[styles.rootView, {
        backgroundColor: color,
      }]} />
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    height: 0.5,
    flex: 1,
  },
});

export default Divider
