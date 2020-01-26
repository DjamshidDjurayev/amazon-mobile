import React, {Component} from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types';
import CustomText from '../../../components/CustomText';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../utils/colors';
import {getDeviceWidth, toDp} from '../../../../utils/ScreenUtils';
import TextUtils from '../../../../utils/TextUtils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class CatalogItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    numColumns: PropTypes.number,
    onClick: PropTypes.func,
    item: PropTypes.object,
    icon: PropTypes.string,
  };

  static defaultProps = {
    numColumns: 3,
    icon: null,
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
    const {numColumns, onClick, item, icon} = this.props;

    if (item.empty === true) {
      return(
        <View style={{
          marginLeft: toDp(18),
          marginRight: this.state.cardMarginRight,
          flex: 1 / numColumns
        }
        }/>
      )
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
        <View style={[styles.content]}>
          <View
            style={[styles.cardImage, {
              width: this.state.size,
              height: this.state.size,
            }]}>
            {icon ? this.renderIcon() : this.renderInitialLetters(item.name)}
          </View>

          <CustomText
            ellipsizeMode={'tail'}
            style={styles.cardTitle}
            title={item.name}
            numberOfLines={2}
          />
        </View>
      </TouchableOpacity>
    )
  }

  renderIcon = () => {
    const {icon} = this.props;
    return (
      <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} color={colors.black}  size={toDp(30)}/>
      </View>
    )
  };

  renderInitialLetters = name => {
    return (
      <CustomText
        textColor={colors.white}
        size={26}
        title={TextUtils.getInitialLetter(name)}/>
    )
  };
}

const styles = EStyleSheet.create({
  rootView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderRadius: '20rem',
    backgroundColor: colors.white,
    elevation: '4rem',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: '15rem',
  },
  cardImage: {
    borderTopLeftRadius: '12rem',
    borderTopRightRadius: '12rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginTop: '6rem',
    marginLeft: '10rem',
    marginRight: '12rem',
    marginBottom: '10rem',
    height: '36rem',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CatalogItem
