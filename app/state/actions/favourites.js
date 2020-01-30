import * as types from '../actionTypes';

export const addToFavourites = (data, id) => ({ type: types.FAVOURITES_ADD_TO_LIST, data, id });

export const removeFromFavourites = id => ({ type: types.FAVOURITES_REMOVE_FROM_LIST, id });

export const clearFavourites = () => ({ type: types.FAVOURITES_CLEAR_LIST });
