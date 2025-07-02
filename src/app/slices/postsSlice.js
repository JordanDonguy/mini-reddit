import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadingPosts = createAsyncThunk('posts/loadingPosts', async(subreddit) => {
    const API_ROOT = 'https://api-mini-reddit.jordan-donguy.workers.dev';  
    const response = await fetch(`${API_ROOT}${subreddit}/.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoadingPosts: false,
        failedToLoadPosts: false
    } ,
    extraReducers: (builder) => {
        builder.addCase(loadingPosts.pending, (state) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false
        }).addCase(loadingPosts.fulfilled, (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            state.posts = action.payload
        }).addCase(loadingPosts.rejected, (state) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true;
            console.log('rejected')
        })
    }
});

export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const failedToLoadPosts = (state) => state.posts.failedToLoadPosts;
export default postsSlice.reducer;