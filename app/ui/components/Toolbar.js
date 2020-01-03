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
    titleEnabled: PropTypes.bool,
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
    titleEnabled: true,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {searchEnabled, backButtonEnabled, toolbarColor} = this.props;

    return(
      <View
        style={[styles.rootView, {
          backgroundColor: toolbarColor ? toolbarColor : colors.green
        }]}>
        {backButtonEnabled ? this.renderBackButton() : null}
        {this.renderTitle()}
        {searchEnabled ? this.renderSearchButton() : null}
      </View>
    )
  }

  renderTitle = () => {
    const {titleEnabled, title} = this.props;

    return(
      <View style={styles.titleContainer}>
        {titleEnabled ?
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
        onPress={() => onSearchClick}
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
        onPress={() => onBackButtonClick}>
        <Entypo name={'chevron-thin-left'} size={toDp(20)} color={colors.white}/>
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
    })
  },
  searchContainer: {
    marginRight: '14rem',
  },
  titleContainer: {
    flex: 1,
    marginLeft: '36rem',
  },
  backButtonContainer: {
    marginLeft: '14rem',
  }
});

export default Toolbar
