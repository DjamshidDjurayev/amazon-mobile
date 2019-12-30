import {put, takeEvery, delay, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';

function* registrationPerformAsync() {
  try {
    yield delay(2000);
    // simulating login api call
    // TODO replace with api call
    yield put(actions.registrationSuccess({}));
    // yield put(actions.loginError({}));
  } catch (e) {
    yield put(actions.registrationCancel());
  } finally {
    if (yield cancelled()) {
      yield put(actions.registrationCancel());
    }
  }
}

export function* watchRegistrationPerform() {
  yield takeEvery(types.REGISTRATION_ACTION_PERFORM, function* (...args) {
    yield race({
      task: call(registrationPerformAsync, ...args),
      cancel: take(types.REGISTRATION_ACTION_CANCEL),
    });
  });
}
