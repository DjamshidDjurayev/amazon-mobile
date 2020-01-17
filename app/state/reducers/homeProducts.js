import * as types from '../actionTypes';

const initialState = {
  homeProducts: {
    products1: {},
    products2: {},
    products3: {},
  },
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function homeProducts(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_HOME_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case types.GET_HOME_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        homeProducts: action.data,
        error: null,
      };

    case types.GET_HOME_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.GET_HOME_PRODUCTS_CANCEL:
      return {
        ...state,
      };

    case types.GET_HOME_PRODUCTS_CANCELLED:
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
