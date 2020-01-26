import * as types from '../actionTypes';

export const userUpdateNames = data => ({ type: types.USER_UPDATE_NAMES, data });

export const userUpdateNamesSuccess = data => ({ type: types.USER_UPDATE_NAMES_SUCCESS, data });

export const userUpdateNamesError = error => ({ type: types.USER_UPDATE_NAMES_ERROR, error });
