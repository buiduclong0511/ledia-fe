import { combineReducers } from "redux";

import authReducer from "./auth";
import appReducer from "./app";
import toastReducer from "./toast";
import modalReducer from "./modal";

export * from "./auth";
export * from "./app";
export * from "./toast";
export * from "./modal";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    toast: toastReducer,
    modal: modalReducer,
});

export default rootReducer;