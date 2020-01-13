import * as types from '../actionTypes';

const initialState = {
  orders: [],
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function myOrders(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_MY_ORDERS:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.data,
      };

    case types.GET_MY_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.GET_MY_ORDERS_CANCEL:
      return {
        ...state,
      };

    case types.GET_MY_ORDERS_CANCELLED:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
      };
    default:
      return state;
  }
}
