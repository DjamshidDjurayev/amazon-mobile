import {put, cancelled, call, take, race, takeLatest} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import * as NavigationService from '../navigation/NavigationService'
import Api from "../network/Api"
import BaseApi from '../network/BaseApi';

function* loginPerformAsync(action) {
  try {
    const response = yield call(() => BaseApi.get(Api.userRegistration()));
    if (response && response.status === 200) {
      yield put(actions.loginSuccess(response));
      NavigationService.navigateWithReset('Main')
    }
  } catch (e) {
    yield put(actions.loginError(e));
  } finally {
    if (yield cancelled()) {
      yield put(actions.loginCancel());
    }
  }
}

export function* watchLoginPerform() {
  yield takeLatest(types.LOGIN_ACTION_PERFORM, function* (...args) {
    yield race({
      task: call(loginPerformAsync, ...args),
      cancel: take(types.LOGIN_ACTION_CANCEL),
    });
  });
}
