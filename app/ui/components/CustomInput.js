import React from "react";
import {TextInput} from "react-native";
import colors from "../../colors";
import PropTypes from 'prop-types';
import EStyleSheet from "react-native-extended-stylesheet";

class CustomInput extends React.Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    style: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    underlineColorBlurred: PropTypes.string,
    underlineColorFocused: PropTypes.string,
  };

  static defaultProps = {
    underlineColorBlurred: colors.ultra_light_gray,
    underlineColorFocused: colors.black
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  onFocus = event => {
    this.setState({isFocused: true});

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  onBlur = event => {
    this.setState({isFocused: false});

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const {isFocused} = this.state;
    const {style, onChangeText, underlineColorBlurred, underlineColorFocused, ...otherProps} = this.props;

    return (
      <TextInput
        onChangeText={onChangeText}
        style={[style || styles.defaultStyle]}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        {...otherProps}
      />
    );
  }
}

const styles = EStyleSheet.create({
  defaultStyle: {
    flex: 1,
    paddingTop: "12rem",
    paddingBottom: "6rem",
    fontSize: "16rem",
    fontWeight: 'normal',
    backgroundColor: colors.white,
    borderRadius: '16rem',
  },
});

export default CustomInput;
