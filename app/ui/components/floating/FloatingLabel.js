import React, {Component} from 'react';
import {Animated} from 'react-native';
import PropTypes from 'prop-types';
import fontHelper from '../../../utils/fontHelper';
import EStyleSheet from 'react-native-extended-stylesheet';
import {toDp} from '../../../utils/ScreenUtils';

export default class FloatingLabel extends Component {
  static propTypes = {
    duration: PropTypes.number,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    highlightColor: PropTypes.string,
    style: PropTypes.object,
    starEnabled: PropTypes.bool,
    labelSmallSize: PropTypes.number,
    labelLargeSize: PropTypes.number,
    font: PropTypes.string,
    height: PropTypes.number,
    focusHandler: PropTypes.func,
  };

  static defaultProps = {
    labelSmallSize: 12,
    labelLargeSize: 16,
    labelColor: '#919191',
    font: fontHelper.fontDefault,
    height: 65,
  };

  constructor(props: Object) {
    super(props);
    this.posTop = toDp(10);
    this.fontLarge = toDp(props.labelLargeSize);
    this.fontSmall = toDp(props.labelSmallSize);

    this.posBottom =
      (toDp(props.height) - this.fontLarge - toDp(20) + this.posTop + 3) /
      toDp(2);

    let posTop = props.hasValue ? this.posTop : this.posBottom;
    let fontSize = props.hasValue ? this.fontSmall : this.fontLarge;
    this.state = {
      top: new Animated.Value(posTop),
      fontSize: new Animated.Value(fontSize),
    };
  }
  shouldComponentUpdate(nextProps: Object, nextState: Object): boolean {
    return this.props.hasValue === nextProps.hasValue;
  }

  floatLabel() {
    Animated.parallel([
      Animated.timing(this.state.top, {
        toValue: this.posTop,
        duration: this.props.duration,
      }),
      Animated.timing(this.state.fontSize, {
        toValue: this.fontSmall,
        duration: this.props.duration,
      }),
    ]).start();
  }
  sinkLabel() {
    Animated.parallel([
      Animated.timing(this.state.top, {
        toValue: this.posBottom,
        duration: this.props.duration,
      }),
      Animated.timing(this.state.fontSize, {
        toValue: this.fontLarge,
        duration: this.props.duration,
      }),
    ]).start();
  }
  render(): Object {
    const {
      label,
      labelColor,
      highlightColor,
      style,
      font,
      isFocused,
      focusHandler,
    } = this.props;
    return (
      <Animated.Text
        style={[
          {
            fontFamily: font,
            fontSize: this.state.fontSize,
            top: this.state.top,
            color: isFocused ? highlightColor : labelColor,
            includeFontPadding: false,
          },
          styles.labelText,
          style,
        ]}
        onPress={() => {
          fontHelper && focusHandler();
        }}>
        {label}
      </Animated.Text>
    );
  }
}

const styles = EStyleSheet.create({
  labelText: {
    position: 'absolute',
    paddingLeft: '14rem',
  },
});
