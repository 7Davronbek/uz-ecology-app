import { rootReducers } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
)