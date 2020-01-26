import {put, takeLatest, cancelled, call, take, race, select} from 'redux-saga/effects';
import * as types from '../state/actionTypes';
import {actions} from '../state/actions';
import BaseApi from '../network/BaseApi';
import Api from '../network/Api';
import codes from '../network/codes';
import {getUser} from './selectors/selectors';

function* getCartAsync() {
  try {
    const user = yield select(getUser);
    if (user) {
      const config = { headers: {'Authorization' : user.id}};
      const response = yield call(() => BaseApi.get(Api.getCart(), config));
      if (response && response.status === codes.STATUS_200) {
        yield put(actions.getCartSuccess(response.data.cart.products))
      }
    } else {
      yield put(actions.getCartError("Not Authorized"))
    }
  } catch (e) {
    yield put(actions.getCartError(e))
  } finally {
    if (yield cancelled()) {
      yield put(actions.getCartCancelled());
    }
  }
}

function* addProductToCartAsync(action) {
  const product = action.data;
  try {
    const user = yield select(getUser);
    if (user) {
      const config = { headers: {'Authorization' : user.id}};
      const response = yield call(() => BaseApi.post(Api.addToCart(), product, config));
      if (response && response.status === codes.STATUS_204) {
        const data = response.data;
        yield put(actions.addToCartSuccess(data));
        // get cart
        yield put(actions.getCart())
      }
    } else {
      yield put(actions.addToCartError("Not Authorized"))
    }
  } catch (e) {
    yield put(actions.addToCartError(e))
  }
}

export function* watchCart() {
  yield takeLatest(types.GET_CART, function* (...args) {
    yield race({
      task: call(getCartAsync, ...args),
      cancel: take(types.GET_CART_CANCEL),
    });
  });
  yield takeLatest(types.ADD_PRODUCT_TO_CART, addProductToCartAsync)
}
