import React from "react";
import {StyleSheet, Text} from "react-native";
import colors from "../../colors";
import PropTypes from 'prop-types';
import {toDp} from "../../utils/ScreenUtils";

class CustomText extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.object,
    font: PropTypes.string,
    size: PropTypes.number,
    margin: PropTypes.number,
  };

  render() {
    const {style, font, size, margin, textColor, title, children, ...otherProps} = this.props;

    return (
      <Text style={[style, styles.textStyle, {
        fontFamily: font,
        fontSize: size ? toDp(size) : toDp(14),
        margin: margin ? toDp(margin) : 0,
        color: textColor ? textColor : colors.black
      }]} {...otherProps}
      >
        {title}
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {}
});

export default CustomText;
