import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowLoginModal: false
}

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showLoginModal: (state) => {
            state.isShowLoginModal = true;
        },
        hideLoginModal: (state) => {
            state.isShowLoginModal = false;
        }
    }
});

export const modalSelector = state => state.modal;
export const {
    showLoginModal,
    hideLoginModal
} = modal.actions;
export default modal.reducer;