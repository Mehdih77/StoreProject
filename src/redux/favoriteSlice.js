import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const favoriteAdapter = createEntityAdapter();

const initialState = favoriteAdapter.getInitialState();

export const {
    selectAll: selectAllFavorite,
    selectIds: selectAllFavoriteIds
} = favoriteAdapter.getSelectors(state => state.favorite);

const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers: {
        addFavorite(state,action) {
            favoriteAdapter.addOne(state,action)
        },
        removeFavorite(state,action) {
            favoriteAdapter.removeOne(state,action)
        }
    }
});

export const {
    addFavorite,
    removeFavorite
} = favoriteSlice.actions;

export default favoriteSlice.reducer;