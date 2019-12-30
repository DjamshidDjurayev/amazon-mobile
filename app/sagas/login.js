import {put, takeEvery, delay, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import * as NavigationService from '../navigation/NavigationService'

function* loginPerformAsync() {
  try {
    yield delay(2000);
    // simulating login api call
    // TODO replace with api call
    yield put(actions.loginSuccess({}));
    // if response
    yield put(NavigationService.navigateWithReset('Registration'))
  } catch (e) {
    yield put(actions.loginError(e));
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
