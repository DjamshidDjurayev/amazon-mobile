import React, {Component} from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types'
import CustomText from '../../../components/CustomText';
import colors from '../../../../colors';
import FastImage from 'react-native-fast-image';

class HomeProductItem extends Component {
  static propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    const {item, onClick} = this.props;

    return(
      <TouchableOpacity
        onPress={onClick}
        style={styles.rootView}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{uri: item.img}}
          style={styles.image}/>

        <View style={styles.contentContainer}>
          <CustomText
            fontStyle={'bold'}
            title={item.name}/>
          <CustomText
            fontStyle={'bold'}
            title={item.title}/>
          <CustomText
            textColor={colors.red}
            title={item.price}/>
          <CustomText
            textColor={colors.blue}
            title={item.age.toString()}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white,
    marginLeft: '10rem',
    borderRadius: '16rem',
    width: '180rem'
  },
  contentContainer: {
    padding: '10rem',
  },
  image: {
    width: '100%',
    height: '160rem',
    borderRadius: '16rem',
    alignSelf: 'center',
  }
});

export default HomeProductItem
