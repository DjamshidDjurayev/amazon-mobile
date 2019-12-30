import * as types from '../actionTypes';

export function runSplashTimeout() {
  return {
    type: types.SPLASH_TIMEOUT_ACTION_START,
  };
}

export function finishSplashTimeout() {
  return {
    type: types.SPLASH_TIMEOUT_ACTION_FINISHED,
  };
}

export function cancelSplashTimeout() {
  return {
    type: types.SPLASH_TIMEOUT_ACTION_CANCEL,
  };
}
