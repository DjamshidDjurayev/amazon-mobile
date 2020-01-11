import React, {Component} from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity, View} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import colors from '../../colors';
import {toDp} from '../../utils/ScreenUtils';
import PropTypes from 'prop-types'

class Social extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  };

  static defaultProps = {
    iconColor: colors.white,
    iconSize: 32,
  };

  render() {
    const {
      onClick, iconName, iconColor,
      iconSize, style,
    } = this.props;
    return(
      <TouchableOpacity
        activeOpacity={.8}
        onPress={onClick}
        style={[styles.rootView, style]}>
        <EvilIcon
          name={iconName}
          color={iconColor}
          size={toDp(iconSize)} />
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.green,
    borderRadius: '80rem',
    marginLeft: '10rem',
    marginRight: '10rem',
    height: '42rem',
    width: '42rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Social
