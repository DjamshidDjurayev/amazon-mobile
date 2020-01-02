import React, {Component} from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types';
import CustomText from '../../../components/CustomText';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../colors';

class CatalogItem extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const {title} = this.props;

    return(
      <View style={styles.rootView}>
        <CustomText title={title}/>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white
  }
});

export default CatalogItem
