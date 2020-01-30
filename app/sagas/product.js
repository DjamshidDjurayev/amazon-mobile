import {put, takeLatest, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../network/codes';
import utils from '../utils/utils';

function* getProductDetailsAsync(action) {
  const id = action.id;
  try {
    const response = yield call(() => BaseApi.get(Api.getProductDetails(id), null));
    if (response && response.status === codes.STATUS_200) {
      const data = response.data;
      if (!utils.isObjectEmpty(data)) {
        yield put(actions.getProductDetailsSuccess(data, id))
      } else {
        yield put(actions.getProductDetails(id))
      }
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
