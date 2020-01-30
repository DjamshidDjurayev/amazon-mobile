import React from "react";
import {
  TouchableOpacity,
  View,
} from 'react-native';
import colors from "../../../utils/colors";
import PropTypes from 'prop-types';
import EStyleSheet from "react-native-extended-stylesheet";
import FeatherIcon from 'react-native-vector-icons/Feather';
import {toDp} from '../../../utils/ScreenUtils';
import TextInputMask from 'react-native-text-input-mask';
import CustomText from './../CustomText';
import TextUtils from '../../../utils/TextUtils';
import fontHelper from '../../../utils/fontHelper';

class Input extends React.Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    inputRef: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    underlineColorBlurred: PropTypes.string,
    underlineColorFocused: PropTypes.string,
    showHidePassword: PropTypes.bool,
    mask: PropTypes.string,
    errorText: PropTypes.string,
    errorColor: PropTypes.string,
    font: PropTypes.string,
  };

  static defaultProps = {
    underlineColorBlurred: colors.ultra_light_gray,
    underlineColorFocused: colors.black,
    errorColor: colors.red,
    showHidePassword: false,
    error: true,
    font: fontHelper.fontDefault,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      passwordHidden: true,
      inputError: false,
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

  onFocusRequest = () => {
    if (this.parentInput) {
      this.parentInput.focus();
    }
  };

  render() {
    const {
      showHidePassword, inputRef,
      style, onChangeText, underlineColorBlurred,
      underlineColorFocused, mask, errorText, errorColor, font,
      ...otherProps} = this.props;

    return (
      <View
        style={styles.rootView}>
        <View>
          <TextInputMask
            refInput={ref => {
              this.parentInput = ref;
            }}
            style={[{
              paddingRight: showHidePassword ? toDp(38) : toDp(6),
              paddingTop: toDp(14),
              paddingBottom: toDp(14),
              borderBottomWidth: errorText && !TextUtils.isEmpty(errorText) ? 1 : 0,
              borderBottomColor: errorText && !TextUtils.isEmpty(errorText) ? errorColor : 'transparent',
              fontFamily: font,
            }, style]}
            mask={mask}
            secureTextEntry={showHidePassword && this.state.passwordHidden}
            onChangeText={onChangeText}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...otherProps}
          />
          { showHidePassword ?
              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => this.onEyeClicked()}>
                <FeatherIcon
                  color={colors.gray_5F}
                  name={this.state.passwordHidden ? "eye-off" : "eye"}
                  size={toDp(20)}/>
              </TouchableOpacity> : null}
        </View>
        {errorText && !TextUtils.isEmpty(errorText) ?
          <CustomText
            style={styles.errorText}
            title={errorText}
            textColor={errorColor}
            size={11}/> : null}
      </View>
    );
  }

  onEyeClicked = () => {
    this.setState({
      passwordHidden: !this.state.passwordHidden
    })
  };
}

const styles = EStyleSheet.create({
  rootView: {
  },
  eyeContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: '-10rem',
    top: 0,
    bottom: 0,
    width: '48rem',
  },
  errorText: {
    marginLeft: '5rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  }
});

export default Input;
