import { useRef } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useSelector, useDispatch } from 'react-redux';

import { appSelector, updatePlayingSong } from 'src/redux';
import { convertSongObj } from 'src/utils';

export const PlayerModule = () => {
    const player = useSelector(appSelector);
    const dispatch = useDispatch();
    const volumeRef = useRef(null);
    const audioRef = useRef(null);

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
    // handle function
    return (
        <ReactJkMusicPlayer
            audioLists={player.playlist}
            autoPlay={player.isPlaying}
            quietUpdate 
            defaultPosition={{ right: 100, top: 100 }}
            clearPriorAudioLists
            showThemeSwitch={false}
            theme={"dark"}
            mode="full"
            onAudioPlay={handleAudioPlay}
            getAudioInstance={handleGetAudioRef}
        />
    );
};