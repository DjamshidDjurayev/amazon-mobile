import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import * as reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../sagas';

const middleWares = [];
const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers(reducers);

middleWares.push(sagaMiddleware);

if (__DEV__) {
  middleWares.push(createLogger());
}

const store = createStore(combinedReducers, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);

export default store;
