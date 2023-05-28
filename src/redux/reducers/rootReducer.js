import { combineReducers } from "redux";
import auth from "./auth";
import login from "./login";
import registration from "./registration";

const rootReducer = combineReducers({
	auth,
	login,
	registration,
});

export default rootReducer;