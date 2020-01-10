import * as types from '../actionTypes';

export const userLogout = () => ({ type: types.USER_LOG_OUT_ACTION });

export const userLogoutSuccess = () => ({ type: types.USER_LOG_OUT_ACTION_SUCCESS });

export const userLoginSuccess = data => ({ type: types.USER_LOG_IN_ACTION_SUCCESS, data });



