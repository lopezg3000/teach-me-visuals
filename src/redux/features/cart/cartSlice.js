import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload);
        }
    }
})

export const { addToCart } = cartSlice.actions;

export const selectCart = state => state.cart.data;

export default cartSlice.reducer;