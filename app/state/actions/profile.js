import * as types from '../actionTypes';

export function userLogout() {
  return {
    type: types.USER_LOG_OUT_ACTION,
  };
}

export function userLogoutSuccess() {
  return {
    type: types.USER_LOG_OUT_ACTION_SUCCESS,
  };
}

export function userLoginSuccess(data) {
  return {
    type: types.USER_LOG_IN_ACTION_SUCCESS,
    data
  };
}


