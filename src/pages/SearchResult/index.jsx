/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { songApi } from "src/api";
import { StyledSearchResultPage, PaginationCommon } from "src/components";
import { SongItemSearchResultModule } from "src/modules";
import { PER_PAGE, PLAYLIST, SONG } from "src/constants";
import { LoaderCommon } from "src/components/common/LoaderCommon";

export const SearchResult = () => {
    const { slug } = useParams();
    const [searchResult, setSearchResult] = useState({
        songs: [],
        playlists: []
    });
    const [displaySearchResult, setDisplaySearchResult] = useState({
        songs: [],
        playlists: []
    });
    const [currentPage, setCurrentPage] = useState({
        song: 1,
        playlist: 1
    });
    const [totalPages, setTotalPages] = useState({
        song: 1,
        playlist: 1
    });
    const [isLoadingSongs, setIsLoadingSongs] = useState(false);

    // effect function
    const fetchSongs = async () => {
        try {
            setCurrentPage({
                ...currentPage,
                song: 1
            });
            setIsLoadingSongs(true);
            const resSongs = await songApi.search({
                q: slug,
                all: true
            });
            setSearchResult({
                ...searchResult,
                songs: resSongs.data.songs
            });
            setTotalPages({
                ...totalPages,
                song: Math.ceil(resSongs.data.songs.length / PER_PAGE)
            });
        } catch (err) {
            console.log(err.response);
        } finally {
            setIsLoadingSongs(false);
        }
    };

    const changeDisplaySearchResult = (type, currentPage) => {
        if (type === SONG) {
            const displaySongs = searchResult.songs.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
            // console.log(displaySongs);
            setDisplaySearchResult({
                ...displaySearchResult,
                songs: displaySongs
            });
        } else if (type === PLAYLIST) {
            const displayPlaylists = searchResult.playlists.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
            setDisplaySearchResult({
                ...displaySearchResult,
                playlists: displayPlaylists
            });
        }
    };
    // effect function

    // effect
    useEffect(() => {
        fetchSongs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    useEffect(() => {

        if (searchResult.songs.length > 0) {
            changeDisplaySearchResult(SONG, currentPage.song);
        }

        if (searchResult.playlists.length > 0) {
            changeDisplaySearchResult(PLAYLIST, currentPage.playlist);
        }
    }, [searchResult, currentPage]);
    // effect
    
    // handle function
    const handleChangeSongsPage = (event, pageNumber) => {
        setCurrentPage({
            ...currentPage,
            song: pageNumber
        });
    };
    // handle function
    // console.log(displaySearchResult);
    return (
        <StyledSearchResultPage>
            {isLoadingSongs ? (
                <LoaderCommon padding={30} />
            ) : (
                <>
                    <div className="heading">Bài hát:</div>
                    <div className="listResult">
                        {displaySearchResult.songs.map(song => {
                            return (
                                <SongItemSearchResultModule key={song._id} data={song} />
                            );
                        })}
                        {totalPages.song > 1 ? (
                            <div className="pagination">
                                <PaginationCommon 
                                    totalPages={totalPages.song} 
                                    currentPage={currentPage.song} 
                                    onChange={handleChangeSongsPage} 
                                />
                            </div>
                        ) : <></>}
                    </div>
                </>
            )}
        </StyledSearchResultPage>
    );
};