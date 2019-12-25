import * as types from '../../actionTypes';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
