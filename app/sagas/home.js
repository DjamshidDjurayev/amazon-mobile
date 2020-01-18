import {put, takeLatest, cancelled, call, take, race, delay} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../codes';

function* searchProductsAsync(action) {
  try {
    yield delay(800);
    const response = yield call(() =>
      BaseApi.get(Api.searchProducts(action.data), null));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.searchProductsSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.searchProductsError(e))
  } finally {
    if (yield cancelled()) {
      yield put(actions.searchProductsCancelled());
    }
  }
}

function* getHomeProductsAsync() {
  try {
    const response = yield call(() => BaseApi.get(Api.getHomeProducts(), null));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.getHomeProductsSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.getHomeProductsError(e))
  }
}

export function* watchSearchProducts() {
  yield takeLatest(types.SEARCH_PRODUCT, function* (...args) {
    yield race({
      task: call(searchProductsAsync, ...args),
      cancel: take(types.SEARCH_PRODUCT_CANCEL),
    });
  });

  yield takeLatest(types.GET_HOME_PRODUCTS, getHomeProductsAsync)
}
