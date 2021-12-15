import { createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    products: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { products } = productsSlice.actions;
export default productsSlice.reducer;

//////////////////Peticion a la API////////////////////////////
export const getProducts = async (dispatch) => {
  try {
    const resp = await publicRequest.get("/products");
    dispatch(products(resp.data));
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};
