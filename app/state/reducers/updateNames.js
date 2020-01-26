import * as types from '../actionTypes';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function updateNames(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_UPDATE_NAMES:
      return {
        ...state,
        isLoading: true,
      };

    case types.USER_UPDATE_NAMES_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };

    case types.USER_UPDATE_NAMES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
