import * as types from '../actionTypes';

export const addToCart = data => ({ type: types.ADD_PRODUCT_TO_CART, data });

export const addToCartSuccess = data => ({ type: types.ADD_PRODUCT_TO_CART_SUCCESS, data });

export const addToCartError = error => ({ type: types.ADD_PRODUCT_TO_CART_ERROR, error });
