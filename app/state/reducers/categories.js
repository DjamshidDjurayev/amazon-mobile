import * as types from '../actionTypes';

const initialState = {
  categories: [],
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function categories(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
        isCancelled: false,
      };

    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCancelled: false,
        categories: action.data,
      };

    case types.GET_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        isCancelled: false,
        error: action.error,
      };

    case types.GET_CATEGORIES_CANCEL:
      return {
        ...state,
      };

    case types.GET_CATEGORIES_CANCELLED:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
      };
    default:
      return state;
  }
}
