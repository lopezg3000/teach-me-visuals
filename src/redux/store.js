import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../redux/features/products/productsSlice';
import cartReducer from "./features/cart/cartSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
})