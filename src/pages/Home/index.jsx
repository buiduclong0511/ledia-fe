/* eslint-disable react-hooks/exhaustive-deps */
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyledHomePage, ListSongComponent } from "src/components";
import { dataSelector, fetchSongsHome } from "src/redux";

export const Home = () => {
    const songs = useSelector(dataSelector).listSongsHome;
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    // console.log(songs);

    // effect function
    const fetchSongs = async () => {
        try {
            setIsLoading(true);
            if (songs.length) {
                return;
            }
            const res = await dispatch(fetchSongsHome({ all: true }));
            unwrapResult(res);
            // console.log(res);
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