import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { songApi } from "src/api";

import { HeaderComponent, ModalComponent } from "src/components";
import { LOGIN } from "src/constants";
import { LoginModule, RegisterModule } from "src/modules";
import { PATH_UPLOAD } from "src/routes";
import { removeExtraWhitespace, sleep, useDebounce } from "src/utils";

export const HeaderModule = () => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [screen, setScreen] = useState(LOGIN);
    const [isShowLoginModal, setIsShowLoginModal] = useState(false);
    const [isShowSearchResult, setIsShowSearchResult] = useState(true);
    const [isSearched, setIsSearched] = useState(false);
    const [searchResult, setSearchResult] = useState({
        songs: [],
        playlists: []
    });
    const [isSearching, setIsSearching] = useState(false);
    const [keySearch, setKeySearch] = useState("");
    const history = useHistory();

    const toggleIsScrollDown = () => {
        setIsScrollDown(window.scrollY > 50);
    };


    // effect function
    const fetchSongs = async (keySearch) => {
        try {
            setIsSearching(true);
            const resSong = await songApi.search({
                q: keySearch,
            });
            setSearchResult({
                ...searchResult,
                songs: resSong.data.songs
            });
        } catch (err) {
            console.log(err.response);
        } finally {
            setIsSearching(false);
            setIsSearched(true);
        }
    };
    // effect function

    // effect
    useEffect(() => {
        document.addEventListener("scroll", toggleIsScrollDown);

        return () => {
            document.removeEventListener("scroll", toggleIsScrollDown);
        };
    }, []);

    useDebounce(() => {
        if (keySearch.trim()) {
            fetchSongs(removeExtraWhitespace(keySearch.trim()).toLowerCase());
        } else {
            setSearchResult({
                songs: [],
                playlists: []
            });
        }
    }, 500, [keySearch]);
    // effect

    // handle function
    const handleSwitch = (screen) => {
        setScreen(screen);
    };

    const handleToggleShowLoginModal = () => {
        setIsShowLoginModal(!isShowLoginModal);
    };

    const handlePushToUpload = () => {
        history.push(PATH_UPLOAD);
    };

    const handleChangeKeySearch = (event) => {
        setKeySearch(event.target.value);
    };

    const handleFocusInput = () => {
        setIsShowSearchResult(true);
    };

    const handleBlurInput = async () => {
        await sleep(150);
        setIsShowSearchResult(false);
        if (!keySearch.trim()) {
            setIsSearched(false);
        }
    };

    const handleSearchAll = () => {
        console.log(removeExtraWhitespace(keySearch.trim()));
    };
    //handle function

    return (
        <>
            <HeaderComponent 
                isScrollDown={isScrollDown}
                onToggleShowLoginModal={handleToggleShowLoginModal}
                onPushToUpload={handlePushToUpload}
                isShowSearchResult={isShowSearchResult}
                isSearching={isSearching}
                keySearch={keySearch}
                onChangeKeySearch={handleChangeKeySearch}
                searchResult={searchResult}
                isSearched={isSearched}
                onFocusInput={handleFocusInput}
                onBlurInput={handleBlurInput}
                onSearchAll={handleSearchAll}
            />
            {isShowLoginModal ? (
                <ModalComponent>
                    {screen === LOGIN ? (
                        <LoginModule onSwitch={handleSwitch} onCloseModal={handleToggleShowLoginModal} />
                    ) : (
                        <RegisterModule onSwitch={handleSwitch} onCloseModal={handleToggleShowLoginModal} />
                    )}
                </ModalComponent>
            ) : <></>}
        </>
    );
};