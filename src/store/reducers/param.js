import { PARAMS } from "../../config/constants";
import { SET_PARAM } from "../actions";

const initState = PARAMS.PRICE;

export const paramReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PARAM:
      return action.payload.param;
    default:
      return state;
  }
};
