import React from "react";
import {
  TouchableOpacity,
  View,
} from 'react-native';
import colors from "../../colors";
import PropTypes from 'prop-types';
import EStyleSheet from "react-native-extended-stylesheet";
import FeatherIcon from 'react-native-vector-icons/Feather';
import {toDp} from '../../utils/ScreenUtils';
import TextInputMask from 'react-native-text-input-mask';

class CustomInput extends React.Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    inputRef: PropTypes.func,
    style: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    underlineColorBlurred: PropTypes.string,
    underlineColorFocused: PropTypes.string,
    showHidePassword: PropTypes.bool,
    mask: PropTypes.string,
  };

  static defaultProps = {
    underlineColorBlurred: colors.ultra_light_gray,
    underlineColorFocused: colors.black
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      passwordHidden: true,
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
    const {
      showHidePassword,
      inputRef,
      style,
      onChangeText,
      underlineColorBlurred,
      underlineColorFocused,
      mask,
      ...otherProps} = this.props;

    return (
      <View style={showHidePassword ? styles.container : {}}>
        <TextInputMask
          mask={mask}
          refInput={inputRef}
          secureTextEntry={showHidePassword && this.state.passwordHidden}
          onChangeText={onChangeText}
          style={[style || styles.defaultStyle]}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...otherProps}
        />
        {
          showHidePassword ?
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => this.onEyeClicked()}>
              <FeatherIcon
                color={colors.light_gray}
                name={this.state.passwordHidden ? "eye-off" : "eye"}
                size={toDp(20)}/>
            </TouchableOpacity>
            : null
        }
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
  defaultStyle: {
    flex: 1,
    paddingTop: "12rem",
    paddingBottom: "6rem",
    fontSize: "16rem",
    fontWeight: 'normal',
    backgroundColor: colors.white,
    borderRadius: '16rem',
  },
  eyeContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0,
    bottom: 0,
    marginRight: "12rem"
  },
  container: {
    marginLeft: "16rem",
    marginRight: "16rem",
    marginBottom: '8rem',
  }
});

export default CustomInput;
