import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer, persistStore, REHYDRATE} from 'redux-persist'
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../sagas';
import AsyncStorage from '@react-native-community/async-storage';

const middleWares = [];
const sagaMiddleware = createSagaMiddleware();

middleWares.push(sagaMiddleware);

if (__DEV__) {
  middleWares.push(createLogger());
}

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['profile', 'favourites', 'homeProducts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, undefined, compose(applyMiddleware(...middleWares)));
const persistor = persistStore(store, null);

sagaMiddleware.run(rootSaga);

export {store, persistor};
