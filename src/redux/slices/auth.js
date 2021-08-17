import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    token: null,
    isLoading: false
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {}
});

export const {} = auth.actions;
export default auth.reducer;