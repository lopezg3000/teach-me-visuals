import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../redux/features/products/productsSlice';

export default configureStore({
    reducer: {
        products: productsReducer
    },
})