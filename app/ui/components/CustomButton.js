import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../../colors";
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import {toDp} from "../../utils/ScreenUtils";
import CustomText from './CustomText';

class CustomButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    textColor: PropTypes.string,
    buttonColor: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isLoading: PropTypes.bool,
    textSize: PropTypes.number,
    font: PropTypes.string,
    disabledColor: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
    disabled: false,
    buttonColor: colors.light_gray,
    disabledColor: colors.light_gray,
    textColor: colors.white,
    font: '',
    textSize: 14,
  };

  render() {
    const {
      style, isLoading, buttonColor,
      textColor, title, font, onClick, textSize, textStyle,
      disabledColor, disabled, ...otherProps} = this.props;

    return (
      <TouchableOpacity
        disabled={disabled || isLoading}
        activeOpacity={.6}
        onPress={onClick}
        style={[style, styles.button, {
            backgroundColor: (isLoading || disabled) ? disabledColor : buttonColor}
        ]}>
        <CustomText
          textColor={isLoading ? disabledColor : textColor}
          title={title}
          size={textSize}
          style={[styles.buttonText, textStyle, {fontFamily: font}]}
          {...otherProps} />
        {isLoading ?
          <ActivityIndicator
            color={textColor ? textColor : colors.white}
            style={styles.indicator}
            size={toDp(22)}/> : null}
      </TouchableOpacity>
    );
  }
}

const styles = EStyleSheet.create({
  button: {
    borderRadius: "10rem",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '16rem',
    marginRight: '16rem',
  },
  buttonText: {
    margin: "12rem",
    fontSize: "16rem"
  },
  indicator: {
    position: 'absolute',
  }
});

export default CustomButton;
