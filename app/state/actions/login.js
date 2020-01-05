import * as types from '../actionTypes';

export function loginPerform(payload) {
  return {
    type: types.LOGIN_ACTION_PERFORM,
    payload
  };
}

export function loginSuccess(data) {
  return {
    type: types.LOGIN_ACTION_SUCCESS,
    data
  };
}

export function loginCancel() {
  return {
    type: types.LOGIN_ACTION_CANCEL,
  };
}

export function loginError(error) {
  return {
    type: types.LOGIN_ACTION_ERROR,
    error
  };
}
