import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getWidthRatio} from './utils/ScreenUtils';
import {Provider} from 'react-redux';
import store from '../app/state/store';
import AppNavigator from '../app/navigation/AppNavigator';

EStyleSheet.build({
  $rem: getWidthRatio(),
});

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
