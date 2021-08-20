import { useDispatch } from "react-redux";

import { SongItemComponent } from "src/components";
import { addSongs, play, replaceSongs } from "src/redux";

export const SongItemModule = ({
    data
}) => {
    const dispatch = useDispatch();

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
            onPlaySong={handlePlaySong}
            onAddSong={handleAddSong}
        />
    );
};