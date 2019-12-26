import {put, takeEvery, delay, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../../state/actionTypes';
import {actions} from '../../state/actions/index';

function* splashTimeoutStartAsync() {
  try {
    yield delay(3000);
    yield put(actions.finishSplashTimeout());
  } catch (e) {
    yield put(actions.cancelSplashTimeout());
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
