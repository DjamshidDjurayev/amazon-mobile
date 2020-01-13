import * as types from '../actionTypes';

const initialState = {
  searchProducts: [],
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function home(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };

    case types.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchProducts: action.data,
      };

    case types.SEARCH_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.SEARCH_PRODUCT_CANCEL:
      return {
        ...state,
      };

    case types.SEARCH_PRODUCT_CANCELLED:
      return {
        ...state,
        isLoading: false,
        isCancelled: true
      };

    default:
      return state;
  }
}
