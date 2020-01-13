import * as types from '../actionTypes';

export const searchProducts = data => ({ type: types.SEARCH_PRODUCT, data });

export const searchProductsSuccess = data => ({ type: types.SEARCH_PRODUCT_SUCCESS, data });

export const searchProductsError = error => ({ type: types.SEARCH_PRODUCT_ERROR, error });

export const searchProductsCancel = () => ({ type: types.SEARCH_PRODUCT_CANCEL });

export const searchProductsCancelled = () => ({ type: types.SEARCH_PRODUCT_CANCELLED });
