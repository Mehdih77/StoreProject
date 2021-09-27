import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    noticeItems : localStorage.getItem("noticeList") ? JSON.parse(localStorage.getItem("noticeList")) : []
};

const noticeSlice = createSlice({
    name:'notice',
    initialState,
    reducers: {
        addNotice(state,action) {
            state.noticeItems.push(action.payload)
            localStorage.setItem("noticeList", JSON.stringify(state.noticeItems))
        },
        removeNotice(state,action) {
            state.noticeItems = state.noticeItems.filter(f => f.id !== action.payload)
            localStorage.setItem("noticeList", JSON.stringify(state.noticeItems))
        }
    }
});

export const {
    addNotice,
    removeNotice
} = noticeSlice.actions;

export default noticeSlice.reducer;

// useSelector
export const selectAllNotice = (state) => state.notice.noticeItems;
