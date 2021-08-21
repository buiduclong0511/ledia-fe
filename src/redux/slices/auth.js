import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "src/api";

export const login = createAsyncThunk("auth/login", async (body, { rejectWithValue }) => {
    try {
        const res = await authApi.login(body);
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const register = createAsyncThunk("auth/register", async (body, { rejectWithValue }) => {
    try {
        const res = await authApi.register(body);
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const initialState = {
    userInfo: null,
    token: null,
    isLoading: false
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.isLoading = false;
            state.userInfo = null;
            state.isShowLoginModal = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            const { userInfo, token } = action.payload;
            state.token = token;
            state.userInfo = userInfo;
            state.isLoading = false;
        });
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.rejected, (state) => {
            state.token = null;
            state.isLoading = false;
            state.userInfo = null;
        });

        builder.addCase(register.fulfilled, (state, action) => {
            const { userInfo, token } = action.payload;
            state.token = token;
            state.userInfo = userInfo;
            state.isLoading = false;
        });
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(register.rejected, (state) => {
            state.token = null;
            state.isLoading = false;
            state.userInfo = null;
        });
    }
});

export const authSelector = state => state.auth;

export const {
    logout,
} = auth.actions;
export default auth.reducer;