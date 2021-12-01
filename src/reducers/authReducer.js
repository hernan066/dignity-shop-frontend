import { types } from "../types/types";

const initialState = {  
    checking: true,
    login: false,
    //uid: null,
    //name: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type){

        case types.authLogin:
            return{
                ...state,
                ...action.payload,
                checking: false,
                login: true,
            }
        case types.authCheckingFinish:
            return{
                ...state,
                checking: false,
               
            }
        case types.authLogout:
            return{
               
                checking: false,
                login: false,
               
            }

        default:
            return state;
    }
}