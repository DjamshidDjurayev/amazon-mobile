import {put, takeEvery, delay, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import * as NavigationService from '../navigation/NavigationService'

function* splashTimeoutStartAsync() {
  try {
    yield delay(2000);
    yield put(actions.finishSplashTimeout());
    NavigationService.navigateWithReset('Login');
  } finally {
    if (yield cancelled()) {
      yield put(actions.cancelSplashTimeout());
    }
  }
}

export function* watchSplashTimeout() {
  yield takeEvery(types.SPLASH_TIMEOUT_ACTION_START, function* (...args) {
    yield race({
      task: call(splashTimeoutStartAsync, ...args),
      cancel: take(types.SPLASH_TIMEOUT_ACTION_CANCEL),
    });
  });
}
