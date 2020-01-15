import {put, cancelled, call, take, race, takeLatest} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import NavigationService from '../navigation/NavigationService'
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../codes';

function* registrationPerformAsync(action) {
  try {
    const response = yield call(() => BaseApi.post(Api.userRegistration(), action.data, null));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.registrationSuccess(response.data));
      NavigationService.goBack()
    }
  } catch (e) {
    yield put(actions.registrationError(e));
  } finally {
    if (yield cancelled()) {
      yield put(actions.registrationCancelled());
    }
  }
}

export function* watchRegistrationPerform() {
  yield takeLatest(types.REGISTRATION_ACTION_PERFORM, function* (...args) {
    yield race({
      task: call(registrationPerformAsync, ...args),
      cancel: take(types.REGISTRATION_ACTION_CANCEL),
    });
  });
}
