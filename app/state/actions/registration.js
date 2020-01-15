import * as types from '../actionTypes';

export const registrationPerform = data => ({ type: types.REGISTRATION_ACTION_PERFORM, data });

export const registrationSuccess = data => ({ type: types.REGISTRATION_ACTION_SUCCESS, data });

export const registrationCancel = () => ({ type: types.REGISTRATION_ACTION_CANCEL });

export const registrationCancelled = () => ({ type: types.REGISTRATION_ACTION_CANCELLED });

export const registrationErrorClear = () => ({ type: types.REGISTRATION_ACTION_ERROR_CLEAR });

export const registrationError = error => ({ type: types.REGISTRATION_ACTION_ERROR, error });

