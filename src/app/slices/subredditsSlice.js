import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubreddits = createAsyncThunk('subreddits/loadSubreddits', async() => {
    const response = await fetch (`https://www.reddit.com/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
})

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoadingSubreddits: false,
        failedToLoadSubreddits: false
    },
    extraReducers: (builder) => {
        builder.addCase(loadSubreddits.pending, (state) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false
        }).addCase(loadSubreddits.fulfilled, (state, action) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = false;
            state.subreddits = action.payload
        }).addCase(loadSubreddits.rejected, (state) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
            console.log('subreddits fetch rejected')
        })
    }
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const isLoadingSubreddits = (state) => state.subreddits.isLoadingSubreddits;
export const failedToLoadSubreddits = (state) => state.subreddits.failedToLoadSubreddits;
export default subredditsSlice.reducer;