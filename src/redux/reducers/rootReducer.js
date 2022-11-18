import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { tradesReducer } from "./tradesReducer";

export const rootReducers = combineReducers({
    auth: authReducer,
    trades: tradesReducer,
})