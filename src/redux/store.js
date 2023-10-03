import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/features/cart/cartSlice';
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore ({
  reducer :{ 
    cart: cartReducer,
    modal: modalReducer,
  },
})

