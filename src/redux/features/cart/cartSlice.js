import { createSlice } from "@reduxjs/toolkit";

///api does not have a quantity value. 
//I was thinking of geting the quanitiy = 1 and incrementing them with a button or decrementing
//the quantiity and updating that objects quantitiy property. 
//price would be calculated by multiplying price with the quantity. 


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const foundDuplicate = state.data.filter(product => product.id === action.payload.id).length > 0;
            if (foundDuplicate === false) state.data.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter(product => product.id !== action.payload.id);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = state => state.cart.data;

export default cartSlice.reducer;