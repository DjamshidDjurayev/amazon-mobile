import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types'
import colors from '../../utils/colors';
import {toDp} from '../../utils/ScreenUtils';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import CustomText from './CustomText';

class CheckBox extends Component {
  static propTypes = {
    inputRef: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    checkedBackgroundColor: PropTypes.string,
    unCheckedBackgroundColor: PropTypes.string,
    checkedIconColor: PropTypes.string,
    borderRadius: PropTypes.number,
    title: PropTypes.string,
    titleSize: PropTypes.number,
    titleColor: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    checkedBackgroundColor: colors.green,
    unCheckedBackgroundColor: colors.gray_F4,
    checkedIconColor: colors.white,
    borderRadius: 6,
    titleSize: 13,
    titleColor: colors.black,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    const {
      unCheckedBackgroundColor, checkedBackgroundColor, checkedIconColor,
      borderRadius, title, titleColor, titleSize, titleStyle, inputRef, children } = this.props;

    return(
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => this.onItemClick()}>
        <View
          ref={inputRef}
          style={styles.rootView}>
          <View
            style={[styles.container, {
              backgroundColor: this.state.checked ? checkedBackgroundColor : unCheckedBackgroundColor,
              borderRadius: toDp(borderRadius),
            }]}>
            {this.state.checked && this.renderIcon(checkedIconColor)}
          </View>
          {title && this.renderTitle(title, titleColor, titleSize, titleStyle)}
        </View>
        {children}
      </TouchableOpacity>
    )
  }

  renderIcon = (iconColor) => {
    return(
      <MaterialIcon
        name={'check'}
        size={toDp(18)}
        color={iconColor} />
    )
  };

  renderTitle = (title, color, size, titleStyle) => {
    return(
      <CustomText
        style={[styles.titleDefaultStyle, titleStyle]}
        size={size}
        textColor={color}
        title={title}/>
    )
  };

  onItemClick = () => {
    const {onClick} = this.props;
    this.setState({
      checked: !this.state.checked
    }, () => {
      if (onClick) {
        onClick(this.state.checked)
      }
    });
  };

  getCheckedValue = () => {
    return this.state.checked
  };
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: '14rem',
  },
  container: {
    height: '24rem',
    width: '24rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleDefaultStyle: {
    marginLeft: '16rem',
  }
});

export default CheckBox
