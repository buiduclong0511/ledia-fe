import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { songApi } from "src/api";
import { convertSongObj } from "src/utils";

export const fetchSongsHome = createAsyncThunk("data/fetchSongsHome", async (params, { rejectWithValue }) => {
    try {
        const res = await songApi.search(params);
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const initialState = {
    listSongsHome: []
};

const data = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSongsHome.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.listSongsHome = action.payload.songs.map(song => convertSongObj(song));
        });
    }
});

export const dataSelector = state => state.data;
export default data.reducer;