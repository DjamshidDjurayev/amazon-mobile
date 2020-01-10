import {put, cancelled, call, take, race, takeLatest} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import * as NavigationService from '../navigation/NavigationService'
import Api from "../network/Api"
import BaseApi from '../network/BaseApi';
import codes from '../codes';

function* loginPerformAsync(action) {
  try {
    const response = yield call(() => BaseApi.post(Api.userLogin(), action.payload));
    if (response && response.status === codes.STATUS_SUCCESS) {
      // save user data
      yield put(actions.userLoginSuccess(response.data));
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
