import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "../features/Cartslice"
export const store = configureStore({
    reducer:{
        Allcart : cartSlice
    }
})