import * as types from '../actionTypes';

export const userLogout = data => ({ type: types.USER_LOG_OUT_ACTION, data });

export const userLogoutSuccess = data => ({ type: types.USER_LOG_OUT_ACTION_SUCCESS, data });

export const userLogoutError = error => ({ type: types.USER_LOG_OUT_ACTION_ERROR, error });

export const userLogoutErrorClear = () => ({ type: types.USER_LOG_OUT_ERROR_CLEAR });
