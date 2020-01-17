import * as types from '../actionTypes';

const initialState = {
  product: {},
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function product(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_PRODUCT_DETAILS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case types.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.data,
        error: null,
      };

    case types.GET_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.GET_PRODUCT_DETAILS_CANCEL:
      return {
        ...state,
      };

    case types.GET_PRODUCT_DETAILS_CANCELLED:
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
