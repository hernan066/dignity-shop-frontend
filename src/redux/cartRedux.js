import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    
    addProduct: (state, action) => {
      //console.log(action.payload);
      state.products.push(action.payload.product);
      state.quantity += 1;
      state.total += action.payload.price ;
    },
    deleteProduct: (state, action) => {
      //console.log(action.payload.p_id, action.payload.price);
      state.products = state.products.filter(  product=> product.product_cart_id !==  action.payload.p_id);
      state.quantity -= 1;
      state.total -= action.payload.price ;
     
      
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;