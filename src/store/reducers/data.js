import { SET_DATA, SET_INITIAL_DATA } from "../actions";

const initState = {};

export const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIAL_DATA:
    case SET_DATA:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state;
  }
};
