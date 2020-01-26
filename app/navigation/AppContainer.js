import React from 'react'
import BaseComponent from '../ui/base/BaseComponent';
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';
import {connect} from 'react-redux';
import {actions} from '../state/actions';
import strings from '../locales/strings';

class AppContainer extends BaseComponent {
  constructor(props) {
    super(props);
    strings.setLanguage(props.appLanguage);
  }

  setLocale = locale => {
    strings.setLanguage(locale);
    this.props.setAppLanguage(locale);
  };

  getLocale = () => {
    return strings.getLanguage(this.props.appLanguage)
  };

  render() {
    return(
      <AppNavigator
        screenProps={{
          locale: this.getLocale(),
          setLocale: this.setLocale,
        }}
        ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef)
        }} />
    )
  }
}

export default connect(
  (state, props) => ({
    appLanguage: state.profile.appLang
  }),
  dispatch => ({
    setAppLanguage: (lang) => dispatch(actions.appLanguageSet(lang))
  }),
)(AppContainer);
