import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {del, get, post} from '../Server/Axios';

export const getComments = createAsyncThunk("comment/getComments", async() => {
    const getData = await get('/comments');
    return await getData.data;
});

export const postComment = createAsyncThunk("comment/postComment", async(commentData) => {
    return await post("/comments", commentData);
});

export const deleteComment = createAsyncThunk("comment/deleteComment", async(id) => {
    return await del(`/comments/${id}`);
});

const commentAdapter = createEntityAdapter();

const initialState = commentAdapter.getInitialState();

export const {
    selectAll: selectAllComments
} = commentAdapter.getSelectors(state => state.comment)

const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers: {},
    extraReducers: {
        [getComments.fulfilled]: (state,action) => {
            commentAdapter.upsertMany(state,action.payload);
        },
        [postComment.fulfilled]: commentAdapter.addOne,
        [deleteComment.fulfilled]: commentAdapter.removeOne,
    }
})

export default commentSlice.reducer;

// createSelector
export const getCommentByProductId = createSelector(
    selectAllComments,
    (state,pId) => pId,
    (comments,pId) => comments.filter(comment => comment.productId === pId)
)