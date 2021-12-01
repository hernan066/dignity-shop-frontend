import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    auth: authReducer,
    
    /* ui: uiReducer,
    calendar: calendaReducer,
    auth: authReducer, */
});