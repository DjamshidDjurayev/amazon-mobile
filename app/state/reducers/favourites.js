import * as types from '../actionTypes';

const initialState = {
  favourites: {},
  error: null,
  isLoading: false,
};

export default function favourites(state = initialState, action = {}) {
  switch (action.type) {
    case types.FAVOURITES_ADD_TO_LIST:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.id]: {
            ...action.data,
          }
        },
      };

    case types.FAVOURITES_REMOVE_FROM_LIST:
      return {
        ...state,
      };

    case types.FAVOURITES_CLEAR_LIST:
      return {
        ...state,
        favourites: {},
      };

    default:
      return state;
  }
}
