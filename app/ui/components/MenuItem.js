import React, {Component} from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity, View} from 'react-native';
import CustomText from './CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import {toDp} from '../../utils/ScreenUtils';
import colors from '../../colors';
import PropTypes from 'prop-types'

class MenuItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    textSize: PropTypes.number,
    textColor: PropTypes.string,
    containerStyle: PropTypes.object,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    topBorder: PropTypes.bool,
    bottomBorder: PropTypes.bool,
    borderRadius: PropTypes.number,
    rightText: PropTypes.string,
    rightTextColor: PropTypes.string,
    subTitle: PropTypes.string,
    subTitleColor: PropTypes.string,
    subTitleSize: PropTypes.number,
    rightIconEnabled: PropTypes.bool,
  };

  static defaultProps = {
    textSize: 15,
    iconSize: 14,
    iconColor: colors.gray_5F,
    textColor: colors.black,
    topBorder: true,
    bottomBorder: true,
    borderRadius: 16,
    rightTextColor: colors.light_gray,
    subTitleColor: colors.light_gray,
    subTitleSize: 13,
    rightIconEnabled: true,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      onClick, title, textSize,
      containerStyle, iconSize,
      iconColor, textColor, topBorder,
      bottomBorder, borderRadius, rightText,
      rightTextColor, subTitle, subTitleColor,
      subTitleSize, rightIconEnabled} = this.props;

    return(
      <TouchableOpacity
        onPress={onClick}
        style={[styles.rootView, {
          borderTopLeftRadius: topBorder ? toDp(borderRadius) : 0,
          borderTopRightRadius: topBorder ? toDp(borderRadius)  : 0,
          borderBottomLeftRadius: bottomBorder ? toDp(borderRadius)  : 0,
          borderBottomRightRadius: bottomBorder ? toDp(borderRadius)  : 0,
        }, containerStyle]}>

        <View style={styles.titleContainer}>
          {subTitle ?
            <CustomText
              size={subTitleSize}
              style={styles.subTitle}
              title={subTitle}
              textColor={subTitleColor}/>
              : null}
          <CustomText
            textColor={textColor}
            size={textSize}
            style={styles.title}
            title={title}/>
        </View>

        {rightIconEnabled ?
          <View style={styles.rightContainer}>
            {rightText ?
              <CustomText
                title={rightText}
                style={styles.rightText}
                textColor={rightTextColor}/> : null}
            <Entypo
              style={styles.rightIcon}
              name={'chevron-thin-right'}
              size={toDp(iconSize)}
              color={iconColor}/>
          </View> : null
        }
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: '14rem',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
  },
  subTitle: {
  },
  rightIcon: {

  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    marginRight: '10rem',
  },
});

export default MenuItem
