import { createSlice } from '@reduxjs/toolkit';
import Productdata from '../Productdata';

const initialState = {
    cart: [],
    items: Productdata,
    totalQuantity: 0,
    totalPrice: 0,
};

export const Cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const find = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1,
                });
            }
        },

        increaseQuantity: (state, action) => {
            const item = state.cart.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.cart.find(
                (item) => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },

        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const price = Number(cartItem.price) || 0;
                    const quantity = Number(cartItem.quantity) || 0;

                    cartTotal.totalPrice += price * quantity;
                    cartTotal.totalQuantity += quantity;

                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );

            state.totalPrice = Number(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

    },
});

export const {
    addToCart,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} = Cartslice.actions;

export default Cartslice.reducer;