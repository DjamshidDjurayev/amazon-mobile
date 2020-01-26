import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getWidthRatio} from './utils/ScreenUtils';
import {Provider} from 'react-redux';
import {store, persistor} from '../app/state/store';
import AppNavigator from '../app/navigation/AppNavigator';
import NavigationService from './navigation/NavigationService'
import { PersistGate } from 'redux-persist/integration/react'
import AppContainer from './navigation/AppContainer';

EStyleSheet.build({
  $rem: getWidthRatio(),
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
};
