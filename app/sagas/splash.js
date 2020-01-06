import {put, takeEvery, delay, cancelled, call, take, race, select} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import * as NavigationService from '../navigation/NavigationService'
import {getUser} from './selectors/selectors'

function* splashTimeoutStartAsync() {
  try {
    yield delay(1500);
    yield put(actions.finishSplashTimeout());
    const user = yield select(getUser);
    // NavigationService.navigateWithReset(user ? 'Main' : 'Login');
    NavigationService.navigateWithReset('WebView');
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
