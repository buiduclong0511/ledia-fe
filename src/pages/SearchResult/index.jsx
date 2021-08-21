import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { songApi } from "src/api";
import { StyledSearchResultPage } from "src/components";
import { SongItemSearchResultModule } from "src/modules";

export const SearchResult = () => {
    const { slug } = useParams();
    const [searchResult, setSearchResult] = useState({
        songs: [],
        playlists: []
    });
    const [currentPage, setCurrentPage] = useState({
        song: 1,
        playlist: 1
    });

    // effect function
    const fetchSongs = async () => {
        try {
            const resSongs = await songApi.search({
                q: slug,
                page: currentPage.song
            });
            setSearchResult({
                ...searchResult,
                songs: resSongs.data.songs
            });
        } catch (err) {
            console.log(err.response);
        }
    };
    // effect function

    // effect
    useEffect(() => {
        fetchSongs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);
    // effect
    console.log(searchResult);
    return (
        <StyledSearchResultPage>
            <div className="heading">Bài hát:</div>
            <div className="listResult">
                {searchResult.songs.map(song => {
                    return (
                        <SongItemSearchResultModule key={song._id} data={song} />
                    );
                })}
            </div>
        </StyledSearchResultPage>
    );
};