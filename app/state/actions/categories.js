import * as types from '../actionTypes';

export const getCategories = () => ({ type: types.GET_CATEGORIES });

export const getCategoriesSuccess = data => ({ type: types.GET_CATEGORIES_SUCCESS, data });

export const getCategoriesError = error => ({ type: types.GET_CATEGORIES_ERROR, error });

export const getCategoriesCancel = () => ({ type: types.GET_CATEGORIES_CANCEL });

export const getCategoriesCancelled = () => ({ type: types.GET_CATEGORIES_CANCELLED });
