import { combineReducers } from "redux";
import routerReducer from "./routerReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    user: userReducer,
    router: routerReducer
});

export default reducers;

export type StoreType = ReturnType<typeof reducers>;