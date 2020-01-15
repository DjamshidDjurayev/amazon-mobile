import * as types from '../actionTypes';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function registration(state = initialState, action = {}) {
  switch (action.type) {
    case types.REGISTRATION_ACTION_PERFORM:
      return {
        ...state,
        isLoading: true,
        isCancelled: false,
        error: null,
      };

    case types.REGISTRATION_ACTION_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
        isLoading: false,
        isCancelled: false,
      };

    case types.REGISTRATION_ACTION_CANCEL:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
        isFinished: false,
        error: null,
      };

    case types.REGISTRATION_ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isCancelled: false,
      };

    case types.REGISTRATION_ACTION_ERROR_CLEAR:
      return {
        ...state,
        error: null,
      };

    case types.REGISTRATION_ACTION_CANCELLED:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
        error: null,
      };

    default:
      return state;
  }
}
