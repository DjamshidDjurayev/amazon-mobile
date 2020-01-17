import * as types from '../actionTypes';

export const getProductDetails = data => ({ type: types.GET_PRODUCT_DETAILS, data });

export const getProductDetailsSuccess = data => ({ type: types.GET_PRODUCT_DETAILS_SUCCESS, data });

export const getProductDetailsError = error => ({ type: types.GET_PRODUCT_DETAILS_ERROR, error });

export const getProductDetailsCancel = () => ({ type: types.GET_PRODUCT_DETAILS_CANCEL });

export const getProductDetailsCancelled = () => ({ type: types.GET_PRODUCT_DETAILS_CANCELLED });
