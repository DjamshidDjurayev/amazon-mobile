import React, {Component} from 'react'
import {
  View,
  Platform,
  TouchableOpacity
} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import colors from '../../colors';
import Entypo from 'react-native-vector-icons/Entypo'
import CustomText from './CustomText';
import Feather from 'react-native-vector-icons/Feather'
import {toDp} from '../../utils/ScreenUtils';

class Toolbar extends Component {
  static propTypes = {
    searchEnabled: PropTypes.bool,
    title: PropTypes.string,
    backButtonEnabled: PropTypes.bool,
    onSearchClick: PropTypes.func,
    onBackButtonClick: PropTypes.func,
    toolbarColor: PropTypes.string,
  };

  static defaultProps = {
    searchEnabled: false,
    title: null,
    backButtonEnabled: false,
    toolbarColor: colors.green,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {searchEnabled, backButtonEnabled, toolbarColor} = this.props;

    return(
      <View
        style={[styles.rootView, {
          backgroundColor: toolbarColor
        }]}>
        {backButtonEnabled ? this.renderBackButton() : null}
        {this.renderTitle()}
        {searchEnabled ? this.renderSearchButton() : null}
      </View>
    )
  }

  renderTitle = () => {
    const {title} = this.props;

    return(
      <View style={styles.titleContainer}>
        {title ?
          <CustomText
            title={title}
            textColor={colors.white}
            size={20}/>
            : null
        }
      </View>
    )
  };

  renderSearchButton = () => {
    const {onSearchClick} = this.props;

    return(
      <TouchableOpacity
        onPress={onSearchClick}
        style={styles.searchContainer}>
        <Feather
          name={'search'}
          size={toDp(26)}
          color={colors.white}/>
      </TouchableOpacity>
    )
  };

  renderBackButton = () => {
    const {onBackButtonClick} = this.props;
    return(
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={onBackButtonClick}>
        <Entypo
          name={'chevron-thin-left'}
          size={toDp(20)}
          color={colors.white}/>
      </TouchableOpacity>
    )
  };
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.select({
      android: toDp(56),
      ios: toDp(48),
    }),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: toDp(10),
  },
  searchContainer: {
    height: '100%',
    width: '48rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    marginLeft: '30rem',
  },
  backButtonContainer: {
    height: '100%',
    width: '48rem',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Toolbar
