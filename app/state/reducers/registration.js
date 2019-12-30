import * as types from '../actionTypes';

const initialState = {
  response: {
    data: null,
    error: null,
  },
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
      };

    case types.REGISTRATION_ACTION_SUCCESS:
      return {
        ...state,
        response: action.response,
        isLoading: false,
        isCancelled: false,
      };

    case types.REGISTRATION_ACTION_CANCEL:
      return {
        ...state,
        response: action.response,
        isLoading: false,
        isCancelled: true,
        isFinished: false,
      };

    case types.REGISTRATION_ACTION_ERROR:
      return {
        ...state,
        response: action.response,
        isLoading: false,
        isCancelled: false,
      };
    default:
      return state;
  }
}
