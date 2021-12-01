import { types } from "../types/types";

const initialState = {
    hambugerMenu: false,
   
};

export const uiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.uiOpenHambugerMenu:
            return {
              ...state,
              hambugerMenu: true,
            };
          case types.uiCloseHambugerMenu:
            return {
              ...state,
              hambugerMenu: false,
            };
      
          default:
            return state;
    }
}