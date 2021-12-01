import { types } from "../types/types";

export const addProduct = (product, price) => ({
  
    type: types.addProduct,
    payload: {
        product,
        price
    } 
    
    
    
  });
  