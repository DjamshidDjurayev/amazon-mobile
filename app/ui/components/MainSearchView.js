import React, {Component} from 'react'
import {View, TextInput, TouchableWithoutFeedback, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../colors';
import Feather from 'react-native-vector-icons/Feather'
import {toDp} from '../../utils/ScreenUtils';
import PropTypes from 'prop-types';
import fontHelper from '../../fontHelper';

class MainSearchView extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    inputRef: PropTypes.func,
    title: PropTypes.string,
    fontSize: PropTypes.number,
    autoFocus: PropTypes.bool,
    font: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
    loadingColor: PropTypes.string,
  };

  static defaultProps = {
    fontSize: 13,
    autoFocus: false,
    font: fontHelper.fontDefault,
    isLoading: false,
    loadingColor: colors.green,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  render() {
    const {
      style, inputRef, title, fontSize, isLoading,
      autoFocus, font, onChange, onClick, ...otherProps} = this.props;
    return(
      <TouchableWithoutFeedback onPress={onClick}>
        <View style={[styles.rootView, style]}>
          <Feather
            style={styles.searchIcon}
            name={'search'}
            size={toDp(28)}
            color={colors.gray_D6}/>

          <TextInput
            ref={inputRef}
            onChangeText={(inputValue) => {
              onChange(inputValue);
              this.setState({inputValue})
            }}
            autoFocus={autoFocus}
            value={this.state.inputValue}
            placeholderTextColor={colors.gray_D6}
            placeholder={title}
            style={[styles.input, {
              fontSize: toDp(fontSize),
              fontFamily: font,
            }]}
            {...otherProps}
          />

          {isLoading ? this.renderLoadingView() : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderLoadingView = () => {
    const {loadingColor} = this.props;

    return(
      <ActivityIndicator
        style={styles.loading}
        color={loadingColor}/>
    )
  };
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: '12rem',
    alignItems: 'center',
  },
  input: {
    fontWeight: 'normal',
    flex: 1,
    padding: '8rem',
  },
  searchIcon: {
    marginLeft: '13rem',
    marginRight: '10rem',
  },
  loading: {
    marginRight: '6rem'
  },
});

export default MainSearchView
