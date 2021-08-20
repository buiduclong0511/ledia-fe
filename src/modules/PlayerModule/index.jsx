import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useSelector } from 'react-redux';

import { appSelector } from 'src/redux';

export const PlayerModule = () => {
    const player = useSelector(appSelector);

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
        />
    );
};