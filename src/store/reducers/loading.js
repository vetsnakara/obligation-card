import { FETCH_START, FETCH_SUCCESS } from "../actions";

const initState = false;

export const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_START:
      return true;
    case FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};
