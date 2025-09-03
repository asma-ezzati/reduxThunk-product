import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

//Thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:9000/products");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (initialProduct) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/products/${initialProduct.id}`,
        initialProduct
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  //addCase????
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (initialProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/products",
        initialProduct
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  //addCase????
);

//Slice
export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.status = "success"), (state.items = action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
        //ایتم یک ارایه اس و ما میخوایم درون ارایه اضافه کنیم پس پوش میکنیم
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (product) => product.id === action.payload.id
        );

        if (index !== -1) {
          state.items[index] === action.payload;
        }
      });
  },
});

//Selector
export const selectAllProducts = (state) => state.products.items;

export const selectProductById = (state, productId) =>
  state.products.items.find((product) => product.id === productId);

export default productsSlice.reducer;
