import * as types from '../actionTypes';

export function loginPerform() {
  return {
    type: types.LOGIN_ACTION_PERFORM,
  };
}

export function loginSuccess(data) {
  return {
    type: types.LOGIN_ACTION_SUCCESS,
    response: {
      data,
      error: null,
    }
  };
}

export function loginCancel() {
  return {
    type: types.LOGIN_ACTION_CANCEL,
    response: {
      data: null,
      error: null,
    }
  };
}

export function loginError(error) {
  return {
    type: types.LOGIN_ACTION_ERROR,
    response: {
      data: null,
      error
    }
  };
}
