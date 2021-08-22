import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    autoHideDuration: 1500,
    vertical: 'top',
    horizontal: 'right',
    open: false,
    type: "success",
    message: "",
};

const toast = createSlice({
    name: "toast",
    initialState,
    reducers: {
        showToast: (state, action) => {
            const {
                autoHideDuration,
                vertical,
                horizontal,
                type,
                message
            } = action.payload;
            state.open = true;
            state.message = message;
            if (autoHideDuration) {
                state.autoHideDuration = autoHideDuration;
            }
            if (vertical) {
                state.vertical = vertical;
            }
            if (horizontal) {
                state.horizontal = horizontal;
            }
            if (type) {
                state.type = type;
            }
        },
        hideToast: (state) => {
            state.autoHideDuration = 1500;
            state.vertical = 'top';
            state.horizontal = 'right';
            state.open = false;
            state.type = "success";
            state.message = "";
        }
    }
});

export const toastSelector = state => state.toast;
export const {
    showToast,
    hideToast
} = toast.actions;
export default toast.reducer;