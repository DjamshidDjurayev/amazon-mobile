import React, {Component} from 'react'
import {View, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import Feather from 'react-native-vector-icons/Entypo'
import CustomText from './CustomText';

class LanguageSelector extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {
      language: 'ru',
      currency: 'UZS',
    };
  }

  render() {
    const {} = this.props;

    return(
      <View style={styles.rootView}>
        <Feather
          style={styles.chevronDown}
          name={'chevron-down'}/>

        <CustomText
          style={styles.languageTitle}
          title={'UZS'} />

        <Image style={styles.flag}/>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronDown: {
    marginRight: '8rem',
  },
  languageTitle: {
    marginRight: '8rem'
  },
  flag: {
  },
});

export default LanguageSelector
