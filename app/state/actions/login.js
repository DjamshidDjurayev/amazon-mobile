import * as types from '../actionTypes';

export const loginPerform = payload => ({ type: types.LOGIN_ACTION_PERFORM,  payload });

export const loginCancel = () => ({ type: types.LOGIN_ACTION_CANCEL });

export const loginError = error => ({type: types.LOGIN_ACTION_ERROR, error});
