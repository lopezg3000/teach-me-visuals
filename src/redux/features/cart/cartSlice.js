import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload);
            console.log(state.data);
        },
        removeFromCart: (state, action) => {
            // console.log(current(state.data));
            state.data = state.data.filter(product => product.id !== action.payload.id);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = state => state.cart.data;

export default cartSlice.reducer;