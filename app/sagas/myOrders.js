import {put, takeLatest, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../network/codes';

function* getMyOrdersAsync(action) {
  const config = { headers: {'Authorization' : action.data}};
  try {
    const response = yield call(() => BaseApi.get(Api.getMyOrders(), config));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.getMyOrdersSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.getMyOrdersError(e))
  } finally {
    if (yield cancelled()) {
      yield put(actions.getMyOrdersCancelled());
    }
  }
}

export function* watchGetMyOrders() {
  yield takeLatest(types.GET_MY_ORDERS, function* (...args) {
    yield race({
      task: call(getMyOrdersAsync, ...args),
      cancel: take(types.GET_MY_ORDERS_CANCEL),
    });
  });
}
