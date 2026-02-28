import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice";
import CartReducer from "./Slices/CartSlice";
import WishlistReducer from "./Slices/WishlistSlice";
import AuthReducer from "./Slices/AuthSlice";
import ProfileReducer from "./Slices/ProfileSlice";
import OrdersReducer from "./Slices/OrderSlice";
import AddressReducer from "./Slices/AddressSlice";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishlistReducer,
    auth: AuthReducer,
    profile: ProfileReducer,
    orders: OrdersReducer,
    address: AddressReducer,
  },
});

export default store;