import React, {Component} from 'react'
import {View, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import colors from '../../../../colors';

class SliderItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    brand: PropTypes.number,
    url: PropTypes.string,
    img: PropTypes.number,
  };
  static defaultProps = {};

  render() {
    const {title, subTitle, brand, url, img} = this.props;
    return(
      <View
        style={styles.rootView}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={img}/>

        <View style={styles.brandContainer}>
          <Image
            resizeMode={'cover'}
            style={styles.brandImage}
            source={brand}/>
          <CustomText
            style={styles.title}
            size={17}
            title={title}/>
          <CustomText
            style={styles.subTitle}
            size={10}
            title={subTitle}/>

          <CustomButton
            style={styles.detailsButton}
            textStyle={styles.detailsButtonText}
            textSize={12}
            textColor={colors.black}
            bordered
            title={'Details'}/>
          <View>
          </View>
        </View>
      </View>
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
