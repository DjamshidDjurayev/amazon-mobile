import * as types from '../actionTypes';

export const runSplashTimeout = () => ({ type: types.SPLASH_TIMEOUT_ACTION_START });

export const finishSplashTimeout = () => ({ type: types.SPLASH_TIMEOUT_ACTION_FINISHED });

export const cancelSplashTimeout = () => ({ type: types.SPLASH_TIMEOUT_ACTION_CANCEL });
