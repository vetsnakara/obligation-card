import { combineReducers } from "redux";

import { RESET_STATE } from "../actions";

import { paramReducer as param } from "./param";
import { periodReducer as period } from "./period";
import { dataReducer as data } from "./data";
import { loadingReducer as loading } from "./loading";
import { descriptionReducer as description } from "./description";

const appReducer = combineReducers({
  loading,
  param,
  period,
  description,
  data
});

export const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
