import React, {Component} from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types';
import CustomText from '../../../components/CustomText';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../colors';
import {getDeviceWidth, toDp} from '../../../../utils/ScreenUtils';
import TextUtils from '../../../../utils/TextUtils';

class CatalogItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    numColumns: PropTypes.number,
    onClick: PropTypes.func,
    item: PropTypes.object,
  };

  static defaultProps = {
    numColumns: 3,
  };

  constructor(props) {
    super(props);

    this.state = {
      size: 0,
      cardMarginRight: 0,
    }
  }

  componentDidMount(): void {
    const {id, numColumns} = this.props;
    let size = getDeviceWidth() / numColumns - toDp(30);
    let cardMarginRight = ((id + 1) % numColumns === 0) ? toDp(18) : 0;

    this.setState({
      size,
      cardMarginRight
    })
  }

  render() {
    const {numColumns, onClick, item} = this.props;

    if (item.empty === true) {
      return <View style={{
        marginLeft: toDp(18),
        marginRight: this.state.cardMarginRight,
        flex: 1 / numColumns
      }
      }/>
    }

    return(
      <TouchableOpacity
        onPress={onClick}
        opacity={0.8}
        style={[styles.rootView, {
          flex: 1 / numColumns,
          marginLeft: toDp(18),
          marginRight: this.state.cardMarginRight
        }]}>
        <View
          style={[styles.cardImage, {
            width: '100%',
            height: this.state.size,
          }]}>
          <CustomText
            size={26}
            title={TextUtils.getInitialLetter(item.name)}/>
        </View>

        <CustomText
          ellipsizeMode={'tail'}
          style={styles.cardTitle}
          title={item.name}
          numberOfLines={2}
        />
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white,
    borderRadius: '12rem',
    justifyContent: 'center'
  },
  cardImage: {
    borderTopLeftRadius: '12rem',
    borderTopRightRadius: '12rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginTop: '6rem',
    marginLeft: '6rem',
    marginRight: '6rem',
    marginBottom: '6rem',
  },
});

export default CatalogItem
