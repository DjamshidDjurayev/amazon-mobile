import * as types from '../actionTypes';

export const addToFavourites = data => ({ type: types.FAVOURITES_ADD_TO_LIST, data });

export const removeFromFavourites = data => ({ type: types.FAVOURITES_REMOVE_FROM_LIST, data });
