import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlist: [],
    playingSong: null,
    isPlaying: false
};

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        addSongs(state, action) {
            action.payload.forEach(song => state.playlist.push(song));
        },
        replaceSongs(state, action) {
            state.playlist = action.payload;
        },
        play(state) {
            state.isPlaying = true;
        },
        updatePlayingSong(state, action) {
            state.playingSong = action.payload;
        }
    }
});

export const appSelector = state => state.app;
export const {
    addSongs,
    replaceSongs,
    play,
    updatePlayingSong
} = app.actions;
export default app.reducer;