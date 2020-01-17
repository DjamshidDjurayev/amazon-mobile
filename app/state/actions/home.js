import * as types from '../actionTypes';

// home search
export const searchProducts = data => ({ type: types.SEARCH_PRODUCT, data });
export const searchProductsSuccess = data => ({ type: types.SEARCH_PRODUCT_SUCCESS, data });
export const searchProductsError = error => ({ type: types.SEARCH_PRODUCT_ERROR, error });
export const searchProductsCancel = () => ({ type: types.SEARCH_PRODUCT_CANCEL });
export const searchListClear = () => ({ type: types.SEARCH_LIST_CLEAR });
export const searchProductsCancelled = () => ({ type: types.SEARCH_PRODUCT_CANCELLED });
