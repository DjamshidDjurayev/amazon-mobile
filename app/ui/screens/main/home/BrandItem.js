import React, {Component} from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types'
import CustomText from '../../../components/CustomText';
import colors from '../../../../colors';
import FastImage from 'react-native-fast-image';

class BrandItem extends Component {
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
          source={item.image}
          style={styles.image}/>
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white,
    marginLeft: '10rem',
    borderRadius: '16rem',
    width: '180rem',
    borderColor: colors.light_gray,
    borderWidth: 0.5,
    paddingLeft: '10rem',
    paddingRight: '10rem',
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

export default BrandItem
