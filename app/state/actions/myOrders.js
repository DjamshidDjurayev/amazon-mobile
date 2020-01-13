import * as types from '../actionTypes';

export const getMyOrders = data => ({ type: types.GET_MY_ORDERS, data });

export const getMyOrdersSuccess = data => ({ type: types.GET_MY_ORDERS_SUCCESS, data });

export const getMyOrdersError = error => ({ type: types.GET_MY_ORDERS_ERROR, error });

export const getMyOrdersCancel = () => ({ type: types.GET_MY_ORDERS_CANCEL });

export const getMyOrdersCancelled = () => ({ type: types.GET_MY_ORDERS_CANCELLED });
