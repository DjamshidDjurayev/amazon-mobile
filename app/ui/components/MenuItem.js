import React, {Component} from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity, View} from 'react-native';
import CustomText from './CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import {toDp} from '../../utils/ScreenUtils';
import colors from '../../utils/colors';
import PropTypes from 'prop-types'
import Collapsible from 'react-native-collapsible';

class MenuItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    textSize: PropTypes.number,
    textColor: PropTypes.string,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
    opacity: PropTypes.number,
    collapsed: PropTypes.bool,
    collapsible: PropTypes.bool,
  };

  static defaultProps = {
    textSize: 16,
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
    opacity: 0.9,
    collapsible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    const {
      onClick, title, textSize, containerStyle, iconSize,
      iconColor, textColor, topBorder, bottomBorder, borderRadius, rightText,
      rightTextColor, subTitle, subTitleColor, subTitleSize,
      rightIconEnabled, opacity, collapsible, children} = this.props;

    return(
      <View style={[styles.rootView, {
        borderTopLeftRadius: topBorder ? toDp(borderRadius) : 0,
        borderTopRightRadius: topBorder ? toDp(borderRadius)  : 0,
        borderBottomLeftRadius: bottomBorder ? toDp(borderRadius)  : 0,
        borderBottomRightRadius: bottomBorder ? toDp(borderRadius)  : 0,
        paddingTop: collapsible ? toDp(4) : 0,
        paddingBottom: collapsible ? toDp(4) : 0,
      }]}>
        <TouchableOpacity
          opacity={opacity}
          onPress={() => {
            if (collapsible) {
              this.setState({
                collapsed: !this.state.collapsed
              })
            }
            onClick && onClick()
          }}
          style={[styles.container, containerStyle]}>
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
                name={collapsible ? (this.state.collapsed ? 'chevron-thin-down' : 'chevron-thin-right') : 'chevron-thin-right'}
                size={toDp(iconSize)}
                color={iconColor}/>
            </View> : null}
        </TouchableOpacity>

        <View>
          <Collapsible collapsed={!this.state.collapsed}>
            {children}
          </Collapsible>
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  rootView: {
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '14rem',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
  },
  subTitle: {
    marginBottom: '5rem'
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
