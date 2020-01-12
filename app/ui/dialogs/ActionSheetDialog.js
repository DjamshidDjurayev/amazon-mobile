import React, {Component} from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../colors';
import MenuItem from '../components/MenuItem';

class ActionSheetDialog extends Component {
  static propTypes = {
    visibility: PropTypes.bool,
    onCancel: PropTypes.func,
    selectedLanguage: PropTypes.string,
    items: PropTypes.array.isRequired,
    onValueChange: PropTypes.func
  };

  render() {
    const {visibility, onCancel, items, onValueChange} = this.props;
    return (
      <Modal
        animationType={'fade'}
        visible={visibility}
        transparent={true}>
        <TouchableWithoutFeedback onPress={onCancel}>
          <View style={styles.rootView}>
            <TouchableWithoutFeedback onPress={null}>

              <View style={styles.content}>
                {items.map((item, index) => {
                  return(
                    <View key={index}>
                      <MenuItem
                        onClick={() => {
                          onValueChange(item, index)
                          onCancel();
                        }}
                        textColor={item.selected ? colors.green : colors.black}
                        topBorder={index === 0}
                        bottomBorder={index === (items.length - 1)}
                        title={item.label}/>
                    </View>
                  )
                })}
              </View>

            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.68)',
  },
  content: {
    margin: '32rem',
    borderRadius: '14rem',
  },
});

export default ActionSheetDialog
