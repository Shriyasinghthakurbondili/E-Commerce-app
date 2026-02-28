import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: []
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;

      const exists = state.wishlistItems.find(i => i.id === item.id);

      if (!exists) {
        state.wishlistItems.push(item);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        item => item.id !== action.payload
      );
    }
  }
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;

// ✅ VERY IMPORTANT SELECTOR
export const selectWishlist = (state) => state.wishlist.wishlistItems;

export default WishlistSlice.reducer;