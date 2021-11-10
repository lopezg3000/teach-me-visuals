import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    products: [],
    status: 'idle',
    error: null
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios('https://fakestoreapi.com/products');
    console.log('hello');
    return response.data;
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched Products to the array
                state.products = state.products.concat(action.payload)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const selectAllProducts = (state) => state.products.products;

export default productsSlice.reducer;