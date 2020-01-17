import {fork, all} from 'redux-saga/effects';
import {watchSplashTimeout} from './splash';
import {watchLoginPerform} from './login';
import {watchRegistrationPerform} from './registration';
import {watchUserLogout} from './profile';
import {watchCategories} from './categories';
import {watchCart} from './cart';
import {watchGetMyOrders} from './myOrders';
import {watchSearchProducts} from './home';
import {watchProduct} from './product';

export default function* rootSaga() {
  yield all([
    fork(watchSplashTimeout),
    fork(watchLoginPerform),
    fork(watchRegistrationPerform),
    fork(watchUserLogout),
    fork(watchCategories),
    fork(watchCart),
    fork(watchGetMyOrders),
    fork(watchSearchProducts),
    fork(watchProduct),
  ]);
}
