import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SongItemSearchResultComponent } from "src/components";
import { addSongs, appSelector, play, replaceSongs, showToast } from "src/redux";
import { convertSongObj, sleep } from "src/utils";

export const SongItemSearchResultModule = ({
    data
}) => {
    const [isShowAddMenu, setIsShowAddMenu] = useState(false);
    const dispatch = useDispatch();
    const app = useSelector(appSelector);
    const currentSong = app.playingSong || {};
    const playlist = app.playlist;
    const isPlaying = currentSong.key === data._id;
    const isWaiting = playlist.some(song => song.key === data._id);

    // handle function
    const handleShowAddMenu = () => {
        setIsShowAddMenu(true);
    };

    const handleHideAddMenu = async () => {
        await sleep(150);
        setIsShowAddMenu(false)
    };

    const handlePlaySong = () => {
        dispatch(replaceSongs([convertSongObj(data)]));
        dispatch(play());
    };

    const handleAddSongToPlaying = () => {
        if (isWaiting) {
            dispatch(showToast({
                message: "Bài hát đã có trong hàng đợi!",
                type: "error",
                autoHideDuration: 1500
            }));
        } else {
            dispatch(addSongs([convertSongObj(data)]));
        }
    };
    // handle function

    return (
        <SongItemSearchResultComponent 
            data={data}
            isShowAddMenu={isShowAddMenu}
            isPlaying={isPlaying}
            onShowAddMenu={handleShowAddMenu}
            onHideAddMenu={handleHideAddMenu}
            onPlaySong={handlePlaySong}
            onAddSongToPlaying={handleAddSongToPlaying}
        />
    );
};