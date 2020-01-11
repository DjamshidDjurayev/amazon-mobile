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
      };

    case types.LOGIN_ACTION_SUCCESS:
      return {
        ...state,
        data: action.data,
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
      };

    case types.LOGIN_ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isCancelled: false,
      };
    default:
      return state;
  }
}
