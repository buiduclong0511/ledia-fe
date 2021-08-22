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
            const isExisted = action.payload.some(song => song.key === state.playingSong?.key);
            if (!isExisted) {
                state.playingSong = null;
            }
        },
        play(state) {
            state.isPlaying = true;
        },
        pause(state) {
            state.isPlaying = false;
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
    pause,
    updatePlayingSong
} = app.actions;
export default app.reducer;