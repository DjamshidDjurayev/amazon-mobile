import React from 'react'
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../colors';
import CustomText from './CustomText';

const Logo = props => {
  return(
    <View style={styles.logoView}>
      <CustomText
        fontStyle={'bold'}
        size={50}
        textColor={colors.white}
        title={props.title}
        style={styles.logoText}/>
    </View>
  )
};

const styles = EStyleSheet.create({
  logoText: {
    marginTop: '16rem',
    marginBottom: '16rem',
  },
  logoView: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logo
