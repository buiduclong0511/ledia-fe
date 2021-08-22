import { useRef } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useSelector, useDispatch } from 'react-redux';

import { appSelector, pause, replaceSongs, updatePlayingSong } from 'src/redux';
import { convertSongObj, useWindowDimensions } from 'src/utils';

export const PlayerModule = () => {
    const player = useSelector(appSelector);
    const dispatch = useDispatch();
    const volumeRef = useRef(null);
    const audioRef = useRef(null);
    const { width } = useWindowDimensions();

    // handle function
    const handleAudioPlay = (audioInfo) => {
        if (!volumeRef.current) {
            audioRef.current.volume = 0.99;
            volumeRef.current = audioRef.current.volume;
        }
        dispatch(updatePlayingSong(convertSongObj(audioInfo)));
    };

    const handleGetAudioRef = (ref) => {
        audioRef.current = ref;
    };

    const handleAudioPause = () => {
        dispatch(pause());
    };

    const handleAudioListsChange = (currentPlayId, audioLists, audioInfo) => {
        dispatch(replaceSongs(audioLists));
    };
    // handle function
    return (
        <ReactJkMusicPlayer
            audioLists={player.playlist}
            autoPlay={true}
            quietUpdate 
            defaultPosition={{ right: width > 575 ? 100 : 20, top: width > 575 ? 100 : 100 }}
            clearPriorAudioLists
            showThemeSwitch={false}
            theme={"dark"}
            mode={width > 575 ? "full" : "mini"}
            onAudioPlay={handleAudioPlay}
            getAudioInstance={handleGetAudioRef}
            showDownload={false}
            onAudioPause={handleAudioPause}
            onAudioListsChange={handleAudioListsChange}
            showMediaSession
        />
    );
};