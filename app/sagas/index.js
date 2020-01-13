import {fork, all} from 'redux-saga/effects';
import {watchSplashTimeout} from './splash';
import {watchLoginPerform} from './login';
import {watchRegistrationPerform} from './registration';
import {watchUserLogout} from './profile';
import {watchCategories} from './categories';

export default function* rootSaga() {
  yield all([
    fork(watchSplashTimeout),
    fork(watchLoginPerform),
    fork(watchRegistrationPerform),
    fork(watchUserLogout),
    fork(watchCategories),
  ]);
}
