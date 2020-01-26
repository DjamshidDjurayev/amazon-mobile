import React, {Component} from 'react';
import {Modal, TouchableWithoutFeedback, View, ActivityIndicator} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import {toDp} from '../../utils/ScreenUtils';
import colors from '../../utils/colors';

class LoadingDialog extends Component {
  static propTypes = {
    visibility: PropTypes.bool,
    cancelable: PropTypes.bool,
    onCancel: PropTypes.func,
  };

  static defaultProps = {
    cancelable: false,
  };

  render() {
    const {visibility, cancelable, onCancel} = this.props;

    return(
      <Modal
        animationType={'fade'}
        visible={visibility}
        transparent={true}>
        <TouchableWithoutFeedback
          onPress={cancelable ? null : onCancel}>
          <View style={styles.rootView}>
            <TouchableWithoutFeedback onPress={null}>
              <ActivityIndicator
                color={colors.black}
                size={toDp(32)}/>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
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

export default LoadingDialog
