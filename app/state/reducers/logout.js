import * as types from '../actionTypes';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function logout(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOG_OUT_ACTION:
      return {
        ...state,
        isLoading: true,
      };

    case types.USER_LOG_OUT_ACTION_SUCCESS:
      return {
        ...state,
        data: null,
        error: null,
        isLoading: false,
      };

    case types.USER_LOG_OUT_ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case types.USER_LOG_OUT_ERROR_CLEAR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
