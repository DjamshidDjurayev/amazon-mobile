import * as types from '../actionTypes';

export const getCart = data => ({ type: types.GET_CART, data });

export const getCartSuccess = data => ({ type: types.GET_CART_SUCCESS, data });

export const getCartError = error => ({ type: types.GET_CART_ERROR, error });

export const getCartCancel = () => ({ type: types.GET_CART_CANCEL });

export const getCartCancelled = () => ({ type: types.GET_CART_CANCELLED });
