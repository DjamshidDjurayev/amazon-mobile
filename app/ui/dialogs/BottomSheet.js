import React, {Component} from 'react'
import {View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomButton from '../components/CustomButton';
import PropTypes from 'prop-types'
import CustomInput from '../components/CustomInput';
import strings from '../../locales/strings';
import colors from '../../utils/colors';
import {connect} from 'react-redux';

class BottomSheet extends Component {
  static propTypes = {
    inputRef: PropTypes.func,
    onCancelClick: PropTypes.func,
    onSaveClick: PropTypes.func,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.inputs = {};

    this.state = {
      inputValue: props.user && props.user.name,
      inputError: '',

      lastNameValue: props.user && props.user.surname,
      lastNameError: '',
    };
  }

  render() {
    let {inputRef, user, onCancelClick, onSaveClick} = this.props;

    return(
      <View>
        <RBSheet
          ref={inputRef}
          closeOnDragDown={true}>
          <View>
            <CustomInput
              inputRef={r => this.inputs['name_input_id'] = r}
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
              returnKeyType="next"
              errorText={this.state.inputError}
              defaultValue={user && user.name}
              value={this.state.inputValue}
              placeholder={strings.name}
              placeholderTextColor={colors.light_gray}
              autoCapitalize="none"
              onSubmitEditing={() => this.focusNextField('surname_input_id')}
              style={styles.input}/>

            <CustomInput
              inputRef={r => this.inputs['surname_input_id'] = r}
              numberOfLines={1}
              multiline={false}
              blurOnSubmit={false}
              onChangeText={(value) => {
                this.setState({
                  lastNameValue: value,
                  lastNameError: '',
                })
              }}
              keyboardType={'default'}
              returnKeyType="done"
              errorText={this.state.inputError}
              defaultValue={user && user.surname}
              value={this.state.lastNameValue}
              placeholder={strings.lastName}
              placeholderTextColor={colors.light_gray}
              autoCapitalize="none"
              style={styles.input}/>

            <View style={styles.buttonsContainer}>
              <CustomButton
                onClick={onCancelClick}
                textColor={colors.black}
                style={styles.button}
                buttonColor={colors.gray_F4}
                title={strings.cancel}/>

              <CustomButton
                onClick={() => {
                  if (user) {
                    if (user.name === this.state.inputValue && user.surname === this.state.lastNameValue) {
                      onCancelClick();
                      return
                    }
                  }
                  onSaveClick(this.state.inputValue, this.state.lastNameValue)
                }}
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

  focusNextField = id => {
    this.inputs[id].focus();
  };
}

const styles = EStyleSheet.create({
  input: {
    fontSize: "15rem",
    fontWeight: 'normal',
    backgroundColor: colors.gray_F4,
    borderRadius: '8rem',
    marginTop: '8rem',
  },
  button: {
    flex: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: '20rem',
    marginTop: '16rem',
  },
});

export default connect(
  (state, props) => ({
    user: state.profile.user,
  }),
  dispatch => ({
  }),
)(BottomSheet);
