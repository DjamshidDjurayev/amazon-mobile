import * as types from '../actionTypes';

export const loginPerform = data => ({ type: types.LOGIN_ACTION_PERFORM,  data });

export const loginCancel = () => ({ type: types.LOGIN_ACTION_CANCEL });

export const loginError = error => ({type: types.LOGIN_ACTION_ERROR, error});

export const loginSuccess = data => ({type: types.LOGIN_ACTION_SUCCESS, data});
