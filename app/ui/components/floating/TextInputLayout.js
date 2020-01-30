import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import Underline from './Underline';
import FloatingLabel from './FloatingLabel';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../utils/colors';
import fontHelper from '../../../utils/fontHelper';
import CustomInput from '../CustomInput';
import {toDp} from '../../../utils/ScreenUtils';
import Input from './Input';

export default class TextInputLayout extends Component {
  static propTypes = {
    duration: PropTypes.number,
    label: PropTypes.string,
    highlightColor: PropTypes.string,
    labelColor: PropTypes.string,
    labelSmallSize: PropTypes.number,
    labelLargeSize: PropTypes.number,
    labelFont: PropTypes.string,
    textFont: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    textFocusColor: PropTypes.string,
    textBlurColor: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    inputStyle: PropTypes.object,
    wrapperStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    returnKeyType: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    height: PropTypes.number,
  };

  static defaultProps = {
    duration: 160,
    borderColor: '#E0E0E0',
    textColor: colors.black,
    underlineColorAndroid: colors.transparent,
    value: '',
    labelFont: fontHelper.fontDefault,
    textFont: fontHelper.fontDefault,
    height: 65,
    textSize: 16,
    highlightColor: colors.green,
  };

  constructor(props: Object, context: Object) {
    super(props, context);
    this.state = {
      isFocused: false,
      text: props.value,
    };
    this.focus = this.focus.bind(this);
  }

  focus = () => {
    if (this.refs.input) {
      this.refs.input.onFocusRequest();
    }
  };

  isFocused = () => {
    return this.state.isFocused;
  };

  render() {
    let {
      height,
      labelLargeSize,
      labelSmallSize,
      onSubmitEditing,
      returnKeyType,
      label,
      highlightColor,
      duration,
      labelColor,
      borderColor,
      textColor,
      textFocusColor,
      textBlurColor,
      onFocus,
      onBlur,
      onChangeText,
      value,
      inputStyle,
      wrapperStyle,
      labelStyle,
      labelFont,
      textFont,
      textSize,
      ...props
    } = this.props;
    return (
      <View
        style={[styles.wrapper, wrapperStyle]}
        ref="wrapper">
        <Input
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          style={[
            {
              fontFamily: textFont,
              color: textColor,
              fontSize: toDp(textSize),
              paddingTop: toDp(26),
            },
            this.state.isFocused && textFocusColor
              ? {
                  color: textFocusColor,
                }
              : {},
            !this.state.isFocused && textBlurColor
              ? {
                  color: textBlurColor,
                }
              : {},
            {
              height: toDp(height),
            },
            inputStyle,
          ]}
          onFocus={() => {
            this.setState({isFocused: true});
            this.refs.floatingLabel.floatLabel();
            onFocus && onFocus();
          }}
          onBlur={() => {
            this.setState({isFocused: false});
            !this.state.text.length && this.refs.floatingLabel.sinkLabel();
            onBlur && onBlur();
          }}
          onChangeText={(value, extractedValue) => {
            this.setState({text: value});
            onChangeText && onChangeText(value, extractedValue);
          }}
          ref="input"
          value={this.state.text}
          {...props}
        />
        <FloatingLabel
          ref="floatingLabel"
          isFocused={this.state.isFocused}
          focusHandler={this.focus}
          label={label}
          labelColor={labelColor}
          highlightColor={highlightColor}
          duration={duration}
          hasValue={!!this.state.text.length}
          style={labelStyle}
          labelLargeSize={labelLargeSize}
          labelSmallSize={labelSmallSize}
          font={labelFont}
          height={height}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  wrapper: {
    paddingLeft: '10rem',
    paddingRight: '10rem',
  },
});
