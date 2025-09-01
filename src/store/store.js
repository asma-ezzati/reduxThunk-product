import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "../reducers/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(fetchProducts());
