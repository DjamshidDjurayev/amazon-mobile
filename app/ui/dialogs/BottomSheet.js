import React, {Component} from 'react'
import {View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomButton from '../components/CustomButton';
import PropTypes from 'prop-types'
import CustomInput from '../components/CustomInput';
import strings from '../../strings';
import colors from '../../colors';
import {toDp} from '../../utils/ScreenUtils';
import {connect} from 'react-redux';
import {actions} from '../../state/actions';

class BottomSheet extends Component {
  static propTypes = {
    inputRef: PropTypes.func,
    type: PropTypes.oneOf(['email', 'phone', 'name', 'delivery_address'])
  };

  static defaultProps = {
    type: 'name',
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputError: '',
    };
  }

  render() {
    const {inputRef, type, user} = this.props;

    return(
      <View>
        <RBSheet
          ref={inputRef}
          height={toDp(220)}
          closeOnDragDown={true}>
          <View>
            <CustomInput
              numberOfLines={1}
              multiline={false}
              blurOnSubmit={false}
              onChangeText={(value) => {
                this.setState({
                  inputValue: value,
                  inputError: '',
                })
              }}
              autoFocus
              keyboardType={'default'}
              returnKeyType="done"
              errorText={this.state.inputError}
              defaultValue={user && user.name}
              value={this.state.inputValue}
              placeholder={strings[type]}
              placeholderTextColor={colors.light_gray}
              autoCapitalize="none"
              style={styles.input}/>

            <View style={styles.buttonsContainer}>
              <CustomButton
                textColor={colors.black}
                style={styles.button}
                buttonColor={colors.gray_F4}
                title={strings.cancel}/>

              <CustomButton
                style={styles.button}
                disabledColor={colors.button_disabled}
                buttonColor={colors.green}
                title={strings.save}/>
            </View>
          </View>
        </RBSheet>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  input: {
    fontSize: "15rem",
    fontWeight: 'normal',
    backgroundColor: colors.gray_F4,
    borderRadius: '8rem',
    marginTop: '20rem',
  },
  button: {
    flex: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: '40rem',
    marginTop: '20rem',
  },
});

export default connect(
  (state, props) => ({
    user: state.profile.user,
  }),
  dispatch => ({
  }),
)(BottomSheet);
