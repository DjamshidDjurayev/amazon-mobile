import * as types from '../actionTypes';

const initialState = {
  isLoading: false,
  isCancelled: false,
  isFinished: false,
};

export default function splash(state = initialState, action = {}) {
  switch (action.type) {
    case types.SPLASH_TIMEOUT_ACTION_START:
      return {
        ...state,
        isLoading: true,
        isCancelled: false,
        isFinished: false,
      };

    case types.SPLASH_TIMEOUT_ACTION_FINISHED:
      return {
        ...state,
        isLoading: false,
        isCancelled: false,
        isFinished: true,
      };

    case types.SPLASH_TIMEOUT_ACTION_CANCEL:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
        isFinished: false,
      };
    default:
      return state;
  }
}
