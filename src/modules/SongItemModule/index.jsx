import { useDispatch, useSelector } from "react-redux";

import { SongItemComponent } from "src/components";
import { addSongs, appSelector, play, replaceSongs } from "src/redux";

export const SongItemModule = ({
    data
}) => {
    const dispatch = useDispatch();
    const app = useSelector(appSelector);
    const playlist = app.playlist;
    const currentSong = app.playingSong || {};
    const isWaiting = playlist.some(song => song.key === data.key);
    const isPlaying = currentSong.key === data.key;

    // handle function
    const handlePlaySong = () => {
        dispatch(replaceSongs([data]));
        dispatch(play());
    };

    const handleAddSong = () => {
        dispatch(addSongs([data]));
        dispatch(play());
    };
    // handle function
    return (
        <SongItemComponent 
            data={data}
            isPlaying={isPlaying}
            isWaiting={isWaiting}
            onPlaySong={handlePlaySong}
            onAddSong={handleAddSong}
        />
    );
};