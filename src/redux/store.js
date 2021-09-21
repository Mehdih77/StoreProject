import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import shopSlice from './shopSlice';

const store = configureStore({
    reducer: {
        shop: shopSlice,
        comment : commentSlice,
    }
})

export default store;