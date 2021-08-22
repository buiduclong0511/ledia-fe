import { combineReducers } from "redux";

import authReducer from "./auth";
import appReducer from "./app";
import toastReducer from "./toast";
import modalReducer from "./modal";
import dataReducer from "./data";

export * from "./auth";
export * from "./app";
export * from "./toast";
export * from "./modal";
export * from "./data";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    toast: toastReducer,
    modal: modalReducer,
    data: dataReducer,
});

export default rootReducer;