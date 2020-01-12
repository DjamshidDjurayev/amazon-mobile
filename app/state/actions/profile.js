import * as types from '../actionTypes';

export const userLogout = data => ({ type: types.USER_LOG_OUT_ACTION, data });

export const userLogoutSuccess = data => ({ type: types.USER_LOG_OUT_ACTION_SUCCESS, data });

export const userLogoutError = error => ({ type: types.USER_LOG_OUT_ACTION_ERROR, error });

export const userLoginSuccess = data => ({ type: types.USER_LOG_IN_ACTION_SUCCESS, data });

export const userGetDetails = data => ({ type: types.USER_GET_DETAILS_ACTION, data });

export const userGetDetailsSuccess = data => ({ type: types.USER_GET_DETAILS_ACTION_SUCCESS, data });

export const userGetDetailsError = error => ({ type: types.USER_GET_DETAILS_ACTION_ERROR, error });

export const appLanguageSet = data => ({ type: types.APP_LANGUAGE_SET_ACTION, data });
