import React, {Component} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'
import CustomText from '../../../components/CustomText';

class SliderItem extends Component {
  static propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
  };
  static defaultProps = {};

  render() {
    const {item, onClick} = this.props;
    return(
      <TouchableOpacity
        onPress={onClick}
        style={styles.rootView}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={item.img}/>

        <View style={styles.brandContainer}>
          <Image
            resizeMode={'cover'}
            style={styles.brandImage}
            source={item.brand}/>
          <CustomText
            fontStyle={'bold'}
            style={styles.title}
            size={17}
            title={item.title}/>
          <CustomText
            style={styles.subTitle}
            size={10}
            title={item.subTitle}/>
          <View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
  },
  brandImage: {
    width: '100rem',
    height: '80rem',
    marginTop: '-10rem',
    marginBottom: '-10rem',
    marginLeft: '-5rem'
  },
  brandContainer: {
    flex: 0.6,
    marginLeft: '16rem',
  },
  image: {
    width: '160rem',
    height: '160rem',
    position: 'absolute',
    top: 0,
    right: '-16rem',
  },
  subTitle: {
    marginTop: '16rem',
  },
  title: {
  },
  detailsButton: {
    alignSelf: 'flex-start',
    marginLeft: 0,
    marginTop: '8rem',
  },
  detailsButtonText: {
    marginLeft: '24rem',
    marginRight: '24rem',
    marginTop: '4rem',
    marginBottom: '4rem',
  }
});

export default SliderItem
