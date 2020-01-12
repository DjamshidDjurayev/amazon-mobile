import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (_navigator && routeName) {
    let action = NavigationActions.navigate({ routeName, params });
    _navigator.dispatch(action);
  }
}

function navigateWithReset(routeName, params) {
  if (_navigator && routeName) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })],
    });
    _navigator.dispatch(resetAction);
  }
}

function goBack() {
  if (_navigator) {
    let action = NavigationActions.back({});
    _navigator.dispatch(action);
  }
}

export default {
  setTopLevelNavigator,
  navigate,
  navigateWithReset,
  goBack,
}
