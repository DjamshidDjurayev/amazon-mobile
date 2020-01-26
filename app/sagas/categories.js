import {put, takeLatest, cancelled, call, take, race} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../network/codes';

function* getCategoriesAsync() {
  try {
    const response = yield call(() => BaseApi.get(Api.getCategories(), null));
    if (response && response.status === codes.STATUS_200) {
      yield put(actions.getCategoriesSuccess(response.data))
    }
  } catch (e) {
    yield put(actions.getCategoriesError(e))
  } finally {
    if (yield cancelled()) {
      yield put(actions.getCategoriesCancelled());
    }
  }
}

export function* watchCategories() {
  yield takeLatest(types.GET_CATEGORIES, function* (...args) {
    yield race({
      task: call(getCategoriesAsync, ...args),
      cancel: take(types.GET_CATEGORIES_CANCEL),
    });
  });
}
