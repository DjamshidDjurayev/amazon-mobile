import {put, cancelled, call, take, race, takeLatest} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import NavigationService from '../navigation/NavigationService'
import Api from "../network/Api"
import BaseApi from '../network/BaseApi';
import codes from '../network/codes';

function* loginPerformAsync(action) {
  try {
    const response = yield call(() => BaseApi.post(Api.userLogin(), action.data, null));
    if (response && response.status === codes.STATUS_200) {
      // save user data
      yield put(actions.loginSuccess(response.data));
      yield put(actions.userSave(response.data));
      // get user details
      yield put(actions.userGetDetails(response.data.userId));
      NavigationService.navigateWithReset('Main')
    }
  } catch (e) {
    const error = e.response.data;
    yield put(actions.loginError(error.error));
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
