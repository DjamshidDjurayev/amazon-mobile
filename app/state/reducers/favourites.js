import * as types from '../actionTypes';

const initialState = {
  favourites: [],
};

export default function favourites(state = initialState, action = {}) {
  switch (action.type) {
    case types.FAVOURITES_ADD_TO_LIST:
      return {
        ...state,
      };

    case types.FAVOURITES_REMOVE_FROM_LIST:
      return {
        ...state,
      };

    default:
      return state;
  }
}
