import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔥 FETCH API
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

// ✅ SELECTORS
export const selectAllProducts = (state) => state.products.list;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

export default ProductSlice.reducer;