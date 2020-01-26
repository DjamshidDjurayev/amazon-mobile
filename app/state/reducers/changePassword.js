import * as types from '../actionTypes';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function changePassword(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_CHANGE_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };

    case types.USER_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };

    case types.USER_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
