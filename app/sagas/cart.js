import {put, takeLatest, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../network/codes';

function* getCartAsync(action) {
  const config = { headers: {'Authorization' : action.data}};
  try {
    const response = yield call(() => BaseApi.get(Api.getCart(), config));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.getCartSuccess(response.data.cart.products))
    }
  } catch (e) {
    yield put(actions.getCartError(e))
  } finally {
    if (yield cancelled()) {
      yield put(actions.getCartCancelled());
    }
  }
}

export function* watchCart() {
  yield takeLatest(types.GET_CART, function* (...args) {
    yield race({
      task: call(getCartAsync, ...args),
      cancel: take(types.GET_CART_CANCEL),
    });
  });
}
