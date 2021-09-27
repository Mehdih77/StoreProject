import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const generalAdapter = createEntityAdapter();

const initialState = generalAdapter.getInitialState();

export const {
    selectAll: selectAllGeneralList
} = generalAdapter.getSelectors(state => state.generalList);


const generalListSlice = createSlice({
    name:"generalList",
    initialState,
    reducers:{
        addList: generalAdapter.addOne,
        removeList: generalAdapter.removeOne,
        updateList: generalAdapter.updateOne
    }
});

export const {
    addList,
    removeList,
    updateList,
} = generalListSlice.actions;

export default generalListSlice.reducer;