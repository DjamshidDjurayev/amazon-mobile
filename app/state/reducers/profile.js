import * as types from '../actionTypes';

const initialState = {
  user: null,
  isLoggingOut: false,
};

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOG_IN_ACTION_SUCCESS:
      return {
        ...state,
        user: action.data,
      };

    case types.USER_LOG_OUT_ACTION:
      return {
        ...state,
        isLoggingOut: true,
      };

    case types.USER_LOG_OUT_ACTION_SUCCESS:
      return {
        ...state,
        user: null,
        isLoggingOut: false,
      };

    default:
      return state;
  }
}
