import React, {Component} from 'react'
import {View, TextInput} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../colors';
import Feather from 'react-native-vector-icons/Feather'
import {toDp} from '../../utils/ScreenUtils';
import strings from '../../strings';
import PropTypes from 'prop-types';

class MainSearchView extends Component {
  static propTypes = {
    style: PropTypes.object,
    inputRef: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  render() {
    const {style, inputRef} = this.props;
    return(
      <View style={[styles.rootView, style]}>
        <Feather
          style={styles.searchIcon}
          name={'search'}
          size={toDp(28)}
          color={colors.gray_D6}/>

        <TextInput
          ref={inputRef}
          onChangeText={(inputValue) => {
            this.setState({inputValue})
          }}
          value={this.state.inputValue}
          placeholderTextColor={colors.gray_D6}
          placeholder={strings.search}
          style={styles.input}/>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: '12rem',
    alignItems: 'center',
  },
  input: {
    fontSize: "13rem",
    fontWeight: 'normal',
    flex: 1,
    padding: '8rem',
  },
  searchIcon: {
    marginLeft: '13rem',
    marginRight: '10rem',
  }
});

export default MainSearchView
