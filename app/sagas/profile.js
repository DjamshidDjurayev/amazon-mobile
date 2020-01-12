import {put, takeLatest, call} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import NavigationService from '../navigation/NavigationService'
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../codes';

function* userLogoutAsync(action) {
  const config = { headers: {'accessToken' : action.data}};
  try {
    // const response = yield call(() => BaseApi.post(Api.userLogout(), {}, config));
    // if (response && response.status === codes.STATUS_204) {
    //   yield put(actions.userLogoutSuccess(response.data));
    //   NavigationService.navigateWithReset('Login');
    // }
    yield put(actions.userLogoutSuccess({}));
    NavigationService.navigateWithReset('Login');
  } catch (e) {
    yield put(actions.userLogoutError(e));
  }
}

function* userGetDetailsAsync(action) {
  try {
    const response = yield call(() => BaseApi.get(Api.userGetDetails(action.data), null));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.userGetDetailsSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.userGetDetailsError(e));
  }
}

export function* watchUserLogout() {
  yield takeLatest(types.USER_LOG_OUT_ACTION, userLogoutAsync);
  yield takeLatest(types.USER_GET_DETAILS_ACTION, userGetDetailsAsync)
}
