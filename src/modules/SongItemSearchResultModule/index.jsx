import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SongItemSearchResultComponent } from "src/components";
import { addSongs, appSelector, play, replaceSongs, showToast } from "src/redux";
import { convertSongObj } from "src/utils";

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
    const handleToggleAddMenu = () => {
        setIsShowAddMenu(!isShowAddMenu);
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
            dispatch(showToast({
                message: "Đã thêm vào hàng đợi!",
                autoHideDuration: 1500
            }));
            dispatch(addSongs([convertSongObj(data)]));
        }
    };
    // handle function

    return (
        <SongItemSearchResultComponent 
            data={data}
            isShowAddMenu={isShowAddMenu}
            isPlaying={isPlaying}
            onToggleAddMenu={handleToggleAddMenu}
            onPlaySong={handlePlaySong}
            onAddSongToPlaying={handleAddSongToPlaying}
        />
    );
};