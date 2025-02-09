import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadingPosts = createAsyncThunk('posts/loadingPosts', async(subreddit) => {
    const API_ROOT = 'https://www.reddit.com';  
    const response = await fetch(`${API_ROOT}/r/${subreddit}/.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoadingPosts: false,
        failedToLeadPosts: false
    } ,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loadingPosts.pending, (state) => {
            state.isLoadingPosts = true;
            state.failedToLeadPosts = false
        }).addCase(loadingPosts.fulfilled, (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLeadPosts = false;
            state.posts = action.payload
        }).addCase(loadingPosts.rejected, (state) => {
            state.isLoadingPosts = false;
            state.failedToLeadPosts = true;
            console.log('rejected')
        })
    }
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;