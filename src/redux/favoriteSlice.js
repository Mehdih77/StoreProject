import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteItems : localStorage.getItem("favoriteList") ? JSON.parse(localStorage.getItem("favoriteList")) : []
};

const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers: {
        addFavorite(state,action) {
            state.favoriteItems.push(action.payload)
            localStorage.setItem("favoriteList", JSON.stringify(state.favoriteItems))
        },
        removeFavorite(state,action) {
            state.favoriteItems = state.favoriteItems.filter(f => f.id !== action.payload)
            localStorage.setItem("favoriteList", JSON.stringify(state.favoriteItems))
        }
    }
});

export const {
    addFavorite,
    removeFavorite
} = favoriteSlice.actions;

export default favoriteSlice.reducer;

// useSelector
export const selectAllFavorite = (state) => state.favorite.favoriteItems;
