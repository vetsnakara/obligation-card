import { PERIODS } from "../../config/constants";
import { SET_PERIOD } from "../actions";

const initState = PERIODS.WEEK;

export const periodReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PERIOD:
      return action.payload.period;
    default:
      return state;
  }
};
