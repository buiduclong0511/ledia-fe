import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { songApi } from "src/api";

import { HeaderComponent, ModalComponent } from "src/components";
import { ENTER, LOGIN } from "src/constants";
import { LoginModule, RegisterModule } from "src/modules";
import { authSelector, hideLoginModal, modalSelector, showLoginModal } from "src/redux";
import { PATH_SEARCH_RESULT, PATH_UPLOAD } from "src/routes";
import { removeExtraWhitespace, useDebounce } from "src/utils";

export const HeaderModule = () => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [screen, setScreen] = useState(LOGIN);
    const userInfo = useSelector(authSelector).userInfo;
    const dispatch = useDispatch();
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    const [searchResult, setSearchResult] = useState({
        songs: [],
        playlists: []
    });
    const [isSearching, setIsSearching] = useState(false);
    const isShowLoginModal = useSelector(modalSelector).isShowLoginModal;
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
            setIsShowSearchResult(true);
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

    const handleHideLoginModal = () => {
        dispatch(hideLoginModal());
    };

    const handleShowLoginModal = () => {
        dispatch(showLoginModal());
    };

    const handlePushToUpload = () => {
        if (!userInfo) {
            handleShowLoginModal();
            return;
        }
        history.push(PATH_UPLOAD);
    };

    const handleChangeKeySearch = (event) => {
        setKeySearch(event.target.value);
    };

    const handleShowSearchResult = () => {
        setIsShowSearchResult(true);
    };

    const handleHideSearchResult = () => {
        setIsShowSearchResult(false);
        if (!keySearch.trim()) {
            setIsSearched(false);
        }
    };

    const handleSearchAll = () => {
        handleHideSearchResult();
        history.push(PATH_SEARCH_RESULT + "/" + removeExtraWhitespace(keySearch.trim()));
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === ENTER) {
            handleSearchAll();
        }
    };
    //handle function

    return (
        <>
            <HeaderComponent 
                isScrollDown={isScrollDown}
                onShowLoginModal={handleShowLoginModal}
                onPushToUpload={handlePushToUpload}
                isShowSearchResult={isShowSearchResult}
                isSearching={isSearching}
                keySearch={keySearch}
                onChangeKeySearch={handleChangeKeySearch}
                searchResult={searchResult}
                isSearched={isSearched}
                onShowSearchResult={handleShowSearchResult}
                onHideSearchResult={handleHideSearchResult}
                onSearchAll={handleSearchAll}
                onKeyUp={handleKeyUp}
            />
            {isShowLoginModal ? (
                <ModalComponent>
                    {screen === LOGIN ? (
                        <LoginModule onSwitch={handleSwitch} onCloseModal={handleHideLoginModal} />
                    ) : (
                        <RegisterModule onSwitch={handleSwitch} onCloseModal={handleHideLoginModal} />
                    )}
                </ModalComponent>
            ) : <></>}
        </>
    );
};