import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getWidthRatio} from './utils/ScreenUtils';
import {Provider} from 'react-redux';
import store from '../app/state/store';

EStyleSheet.build({
  $rem: getWidthRatio(),
});

const App = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

export default App;
