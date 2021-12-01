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
      
      state.products.push(action.payload.product);
      state.quantity += 1;
      state.total += action.payload.price ;
    },
    deleteProduct: (state, action) => {
      console.log(action.payload.id, action.payload.price);
      state.products = state.products.filter(  product=> product._id !==  action.payload.id);
      /* state.products = state.products.filter(  product=> product._id !==  action.payload.id); */
      state.quantity -= 1;
      state.total -= action.payload.price ;
      
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;