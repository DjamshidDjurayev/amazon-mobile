import {put, call, debounce} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../codes';

function* searchProductsAsync(action) {
  try {
    const response = yield call(() => BaseApi.get(Api.getProducts(action.data), null));
    if (response && response.status === codes.STATUS_200) {
      console.warn(response.data);
      yield put(actions.searchProductsSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.searchProductsError(e))
  }
}

export function* watchSearchProducts() {
  yield debounce(600, types.SEARCH_PRODUCT, searchProductsAsync)
}
