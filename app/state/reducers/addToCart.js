import * as types from '../actionTypes';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function addToCart(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };

    case types.ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
