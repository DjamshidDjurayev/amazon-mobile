import * as types from '../actionTypes';

const initialState = {
  cart: [],
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CART:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.data,
      };

    case types.GET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.GET_CART_CANCEL:
      return {
        ...state,
      };

    case types.GET_CART_CANCELLED:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
      };
    default:
      return state;
  }
}
