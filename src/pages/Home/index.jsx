import { useEffect, useState } from "react";

import { songApi } from "src/api";
import { StyledHomePage, ListSongComponent } from "src/components";
import { convertSongObj } from "src/utils";

export const Home = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // effect function
    const fetchSongs = async () => {
        try {
            setIsLoading(true);
            const res = await songApi.search({ all: true });
            setSongs(res.data.songs.map(song => convertSongObj(song)));
        } catch (err) {
            console.log(err.response);
        } finally {
            setIsLoading(false);
        }
    };
    // effect function

    // effect
    useEffect(() => {
        fetchSongs();
    }, []);
    // effect

    return (
        <StyledHomePage>
            <div className="banner"></div>
            <ListSongComponent 
                heading="Bài hát được nghe nhiều nhất"
                listSongs={songs}
                isFetching={isLoading}
            />
            <ListSongComponent 
                heading="Playlist được yêu thích nhất"
                listSongs={songs}
                isFetching={isLoading}
            />
            <ListSongComponent 
                heading="Bài hát nghe gần đây"
                listSongs={songs}
                isFetching={isLoading}
            />
        </StyledHomePage>
    );
};