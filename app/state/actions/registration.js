import * as types from '../actionTypes';

export const registrationPerform = data => ({ type: types.REGISTRATION_ACTION_PERFORM, data });

export const registrationSuccess = data => ({ type: types.REGISTRATION_ACTION_SUCCESS, data });

export const registrationCancel = () => ({ type: types.REGISTRATION_ACTION_CANCEL });

export const registrationError = error => ({ type: types.REGISTRATION_ACTION_ERROR, error });

