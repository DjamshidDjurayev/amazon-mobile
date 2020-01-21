import * as types from '../actionTypes';
import LanguageHelper from '../../utils/LanguageHelper';

const initialState = {
  userLogin: null,
  user: null,
  error: null,
  isLoggingOut: false,
  appLang: LanguageHelper.getDefaultLanguage(),
  userUpdating: false,
  passwordError: null,
  passwordUpdating: false,
};

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOG_IN_ACTION_SUCCESS:
      return {
        ...state,
        userLogin: action.data,
        isLoggingOut: false,
      };

    case types.USER_LOG_OUT_ACTION:
      return {
        ...state,
        isLoggingOut: true,
      };

    case types.USER_LOG_OUT_ACTION_SUCCESS:
      return {
        ...state,
        userLogin: null,
        user: null,
        error: null,
        isLoggingOut: false,
      };

    case types.USER_LOG_OUT_ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoggingOut: false,
      };

    case types.USER_GET_DETAILS_ACTION:
      return {
        ...state,
      };

    case types.USER_GET_DETAILS_ACTION_SUCCESS:
      return {
        ...state,
        user: action.data,
      };

    case types.USER_GET_DETAILS_ACTION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case types.APP_LANGUAGE_SET_ACTION:
      return {
        ...state,
        appLang: action.data
      };

    case types.USER_UPDATE_NAMES:
      return {
        ...state,
        userUpdating: true,
      };

    case types.USER_UPDATE_NAMES_SUCCESS:
      return {
        ...state,
        userUpdating: false,
      };

    case types.USER_UPDATE_NAMES_ERROR:
      return {
        ...state,
        userUpdating: false,
      };

    case types.USER_CHANGE_PASSWORD:
      return {
        ...state,
        passwordUpdating: true,
      };

    case types.USER_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordUpdating: false,
      };

    case types.USER_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        passwordUpdating: false,
        passwordError: action.error,
      };

    default:
      return state;
  }
}
