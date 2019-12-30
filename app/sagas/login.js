import {put, takeEvery, delay, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';

function* loginPerformAsync() {
  try {
    yield delay(2000);
    // simulating login api call
    // TODO replace with api call
    yield put(actions.loginSuccess({}));
    // yield put(actions.loginError({}));
  } catch (e) {
    yield put(actions.loginCancel());
  } finally {
    if (yield cancelled()) {
      yield put(actions.loginCancel());
    }
  }
}

export function* watchLoginPerform() {
  yield takeEvery(types.LOGIN_ACTION_PERFORM, function* (...args) {
    yield race({
      task: call(loginPerformAsync, ...args),
      cancel: take(types.LOGIN_ACTION_CANCEL),
    });
  });
}
