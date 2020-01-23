import * as types from '../actionTypes';

export const getProductDetails = id => ({ type: types.GET_PRODUCT_DETAILS, id });

export const getProductDetailsSuccess = (data, id) => ({ type: types.GET_PRODUCT_DETAILS_SUCCESS, data, id });

export const getProductDetailsError = error => ({ type: types.GET_PRODUCT_DETAILS_ERROR, error });

export const getProductDetailsCancel = () => ({ type: types.GET_PRODUCT_DETAILS_CANCEL });

export const getProductDetailsCancelled = () => ({ type: types.GET_PRODUCT_DETAILS_CANCELLED });
