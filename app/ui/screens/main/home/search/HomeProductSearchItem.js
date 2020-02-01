import React, {Component} from 'react'
import {Image, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../../utils/colors';
import CustomText from '../../../../components/CustomText';
import PropTypes from 'prop-types'

class HomeProductSearchItem extends Component {
  static propTypes = {
    index: PropTypes.number,
    product: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    const {product, onClick, index} = this.props;

    return(
      <TouchableOpacity
        onPress={onClick}
        key={index}
        style={styles.rootView}>

        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{ uri: product.image}}/>

        <View style={styles.titleContainer}>
          <CustomText
            style={styles.title}
            title={product.title}/>
          <CustomText
            fontStyle={'bold'}
            style={styles.price}
            title={product.price}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white,
    borderRadius: '14rem',
    marginTop: '5rem',
    marginBottom: '5rem',
    marginLeft: '8rem',
    marginRight: '8rem',
    elevation: '1rem',
  },
  image: {
    width: '100%',
    height: '140rem',
    borderTopLeftRadius: '14rem',
    borderTopRightRadius: '14rem',
  },
  titleContainer: {
    padding: '10rem',
  },
  title: {
    marginTop: '12rem'
  },
  price: {
    marginTop: '12rem'
  },
});

export default HomeProductSearchItem
