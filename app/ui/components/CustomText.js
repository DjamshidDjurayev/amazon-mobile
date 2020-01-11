import React from "react";
import {Text} from "react-native";
import colors from "../../colors";
import PropTypes from 'prop-types';
import {toDp} from "../../utils/ScreenUtils";
import EStyleSheet from 'react-native-extended-stylesheet';
import fontHelper from '../../fontHelper';

class CustomText extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    font: PropTypes.string,
    size: PropTypes.number,
    fontStyle: PropTypes.oneOf(['bold', 'italic', 'underlined'])
  };

  static defaultProps = {
    textColor: colors.black,
    size: 14,
    font: fontHelper.fontDefault
  };

  render() {
    const {
      style, font, size, fontStyle,
      textColor, title, children, ...otherProps} = this.props;

    return (
      <Text
        style={[style, styles[fontStyle], {
          fontFamily: font,
          fontSize: toDp(size),
          color: textColor
      }]} {...otherProps}>
        {title}
        {children}
      </Text>
    );
  }
}

const styles = EStyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'}
});

export default CustomText;
