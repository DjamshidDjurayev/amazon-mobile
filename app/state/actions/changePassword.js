import * as types from '../actionTypes';

export const userChangePassword = data => ({ type: types.USER_CHANGE_PASSWORD, data });

export const userChangePasswordSuccess = data => ({ type: types.USER_CHANGE_PASSWORD_SUCCESS, data });

export const userChangePasswordError = error => ({ type: types.USER_CHANGE_PASSWORD_ERROR, error });

