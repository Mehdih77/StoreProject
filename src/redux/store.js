import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import favoriteSlice from "./favoriteSlice";
import generalListSlice from "./generalListSlice";
import noticeSlice from "./noticeSlice";
import shopSlice from './shopSlice';

const store = configureStore({
    reducer: {
        shop: shopSlice,
        comment : commentSlice,
        favorite : favoriteSlice,
        notice : noticeSlice,
        generalList : generalListSlice,
    }
})

export default store;