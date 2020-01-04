import React from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import colors from "../../colors";
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import {toDp} from "../../utils/ScreenUtils";

class CustomButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    textColor: PropTypes.string,
    buttonColor: PropTypes.string,
    style: PropTypes.object,
    isLoading: PropTypes.bool,
    textSize: PropTypes.number,
    font: PropTypes.string,
    disabledColor: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    isLoading: false,
    disabled: false,
    textColor: colors.white,
    buttonColor: colors.light_gray,
  };

  render() {
    const {
      style, isLoading, buttonColor,
      textColor, title, font, disabledColor,
      disabled, onClick, ...otherProps} = this.props;

    return (
      <TouchableOpacity
        disabled={disabled || isLoading}
        activeOpacity={.6}
        onPress={onClick}
        style={[
          style,
          styles.button, {
            backgroundColor: (isLoading || disabled)
              ? (disabledColor ? disabledColor : buttonColor ? buttonColor : colors.light_gray)
              : (buttonColor ? buttonColor : colors.light_gray)
          }
        ]}>

        <Text
          style={[
            styles.buttonText,
            {
              color: isLoading ? (disabledColor ? disabledColor : buttonColor) : textColor,
              fontFamily: font ? font : '',
            },
          ]}
          {...otherProps}>

          {title}
        </Text>

        {isLoading ? <ActivityIndicator
                                   color={textColor}
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
