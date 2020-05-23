import { createStore } from "redux";

import { rootReducer } from "./reducers";
import { middleware } from "./enhancers";

export const configureStore = () => {
  return createStore(rootReducer, middleware);
};
