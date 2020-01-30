import React, {Component} from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types'
import CustomText from '../../../../components/CustomText';
import colors from '../../../../../utils/colors';
import FastImage from 'react-native-fast-image';

class FavouriteItem extends Component {
  static propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    const {item, onClick} = this.props;

    return(
      <TouchableOpacity
        onPress={() => {
          onClick && onClick()
        }}
        style={styles.rootView}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{uri: item.images.mainImage}}
          style={styles.image}/>

        <View style={styles.contentContainer}>
          <CustomText
            fontStyle={'bold'}
            title={item.title}/>
          <CustomText
            textColor={colors.red}
            title={item.price || item.price_holder}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white,
    margin: '16rem',
    borderRadius: '16rem',
    padding: '10rem',
  },
  contentContainer: {
    marginTop: '10rem',
  },
  image: {
    width: '100%',
    height: '160rem',
    borderRadius: '16rem',
    alignSelf: 'center',
  }
});

export default FavouriteItem
