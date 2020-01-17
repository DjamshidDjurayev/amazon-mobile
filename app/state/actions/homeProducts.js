import * as types from '../actionTypes';

// home products
export const getHomeProducts = () => ({ type: types.GET_HOME_PRODUCTS });
export const getHomeProductsSuccess = data => ({ type: types.GET_HOME_PRODUCTS_SUCCESS, data });
export const getHomeProductsError = error => ({ type: types.GET_HOME_PRODUCTS_ERROR, error });
export const getHomeProductsCancel = () => ({ type: types.GET_HOME_PRODUCTS_CANCEL });
export const getHomeProductsCancelled = () => ({ type: types.GET_HOME_PRODUCTS_CANCELLED });

