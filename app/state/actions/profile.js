import * as types from '../actionTypes';

export const userClearData = () => ({ type: types.USER_CLEAR_DATA });

export const userSave = data => ({ type: types.USER_SAVE, data });

export const userGetDetails = data => ({ type: types.USER_GET_DETAILS_ACTION, data });

export const userGetDetailsSuccess = data => ({ type: types.USER_GET_DETAILS_ACTION_SUCCESS, data });

export const userGetDetailsError = error => ({ type: types.USER_GET_DETAILS_ACTION_ERROR, error });

export const appLanguageSet = data => ({ type: types.APP_LANGUAGE_SET_ACTION, data });
