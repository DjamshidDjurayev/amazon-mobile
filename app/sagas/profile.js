import {put, takeLatest, delay} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import * as NavigationService from '../navigation/NavigationService'

function* userLogoutAsync() {
  try {
    yield delay(1000);
    yield put(actions.userLogoutSuccess());
    NavigationService.navigateWithReset('Login');
  } catch (e) {
    yield put(actions.userLogoutSuccess());
  }
}

export function* watchUserLogout() {
  yield takeLatest(types.USER_LOG_OUT_ACTION, userLogoutAsync)
}
