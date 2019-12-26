import {fork, all} from 'redux-saga/effects';
import {
  watchSplashTimeout
} from './splash/splash';

export default function* rootSaga() {
  yield all([
    fork(watchSplashTimeout)
  ]);
}
