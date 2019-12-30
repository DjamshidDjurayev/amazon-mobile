import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getWidthRatio} from './utils/ScreenUtils';
import {Provider} from 'react-redux';
import store from '../app/state/store';
import AppNavigator from '../app/navigation/AppNavigator';
import * as NavigationService from './navigation/NavigationService'

EStyleSheet.build({
  $rem: getWidthRatio(),
});

export default class App extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator ref={nav => {
          this.navigator = nav;
        }} />
      </Provider>
    );
  }
};
