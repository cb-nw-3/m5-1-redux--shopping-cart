import { combineReducers } from "redux";
import cartReducer from "./cart";
import taxReducer from "./tax";

export default combineReducers({
  state: cartReducer,
  taxReducer,
});
