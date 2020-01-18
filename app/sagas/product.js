import {put, takeLatest, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../codes';

function* getProductDetailsAsync(action) {
  const query = action.data;
  try {
    const response = yield call(() => BaseApi.get(Api.getProductDetails(query), null));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.getProductDetailsSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.getProductDetailsError(e))
  } finally {
    if (yield cancelled()) {
      yield put(actions.getProductDetailsCancelled());
    }
  }
}

export function* watchProduct() {
  yield takeLatest(types.GET_PRODUCT_DETAILS, function* (...args) {
    yield race({
      task: call(getProductDetailsAsync, ...args),
      cancel: take(types.GET_PRODUCT_DETAILS_CANCEL),
    });
  });
}
