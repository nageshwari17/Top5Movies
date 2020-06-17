import { combineReducers } from "redux";
import movies from "./movies";
const appReducer = combineReducers({
  movies,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
