import { SET_INITIAL_DATA } from "../actions";

const initState = null;

export const descriptionReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return action.payload.description;
    default:
      return state;
  }
};
