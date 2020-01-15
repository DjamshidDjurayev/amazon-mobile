import * as types from '../actionTypes';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_ACTION_PERFORM:
      return {
        ...state,
        isLoading: true,
        isCancelled: false,
        error: null,
      };

    case types.LOGIN_ACTION_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
        isLoading: false,
        isCancelled: false,
        isFinished: true,
      };

    case types.LOGIN_ACTION_CANCEL:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
        isFinished: false,
        error: null,
      };

    case types.LOGIN_ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isCancelled: false,
      };

    case types.LOGIN_ACTION_ERROR_CLEAR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
