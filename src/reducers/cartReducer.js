import { types } from "../types/types";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
};

export const cartReducer = (state = initialState, action) =>{
    switch (action.type) {
            case types.addProduct:
                return{
                    ...state,
                    quantity: state.quantity += 1,
                    products: [...state.products, action.payload.product],
                    total: state.total += action.payload.price,
                    
                }
    
            default:
                return state;
    }
}