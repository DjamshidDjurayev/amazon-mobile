import React, {Component} from 'react'
import {TouchableOpacity, Image, View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import CheckBox from '../../../components/CheckBox';
import colors from '../../../../utils/colors';
import CustomText from '../../../components/CustomText';

const CartItem = ({index, item, onClick}) => {
  return(
    <TouchableOpacity
      onPress={onClick}
      key={index}
      style={styles.rootContainer}>
      <CheckBox
        title={item.title}/>

      <View style={{
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
      }}>
        <Image
          style={{width: 86, height: 106, marginRight: 16, borderRadius: 12}}
          source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}/>

          <View style={{
            flex: 1,
          }}>
              <CustomText
                textColor={colors.light_gray}
                title={'Комплектация: '}>
                <CustomText title={'128 GB'}/>
              </CustomText>

              <CustomText
                textColor={colors.light_gray}
                title={'Цвет: '}>
                <CustomText title={'Aurora Blue'}/>
              </CustomText>

            <View style={{
              flex: 1,
              justifyContent: 'flex-end'
            }}>
              <CustomText
                fontStyle={'bold'}
                size={20}
                title={'5 000 000 '}>
                <CustomText
                  textColor={colors.light_gray}
                  title={'UZS'}/>
              </CustomText>
            </View>
          </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = EStyleSheet.create({
  rootContainer: {
    backgroundColor: colors.white,
    marginTop: '8rem',
    borderRadius: '16rem',
  },
});

export default CartItem
