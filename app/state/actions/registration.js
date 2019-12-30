import * as types from '../actionTypes';

export function registrationPerform() {
  return {
    type: types.REGISTRATION_ACTION_PERFORM,
  };
}

export function registrationSuccess(data) {
  return {
    type: types.REGISTRATION_ACTION_SUCCESS,
    response: {
      data,
      error: null,
    }
  };
}

export function registrationCancel() {
  return {
    type: types.REGISTRATION_ACTION_CANCEL,
    response: {
      data: null,
      error: null,
    }
  };
}

export function registrationError(error) {
  return {
    type: types.REGISTRATION_ACTION_ERROR,
    response: {
      data: null,
      error
    }
  };
}
