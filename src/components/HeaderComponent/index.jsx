import styled from "styled-components";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import { StyledButton, StyledButtonUnderLine, AvatarCommon, SearchResultComponent } from "src/components";
import { breakpoint } from "src/utils";
import { authSelector } from "src/redux";
import { MenuHeaderModule } from "src/modules";
import { ClickAwayListener } from "@material-ui/core";

export const HeaderComponent = ({
    isScrollDown = false,
    isShowSearchResult = false,
    isSearching = false,
    keySearch = "",
    searchResult,
    isSearched,
    onSearchAll,
    onHideSearchResult,
    onShowLoginModal = () => {},
    onPushToUpload = () => {},
    onChangeKeySearch = () => {},
    onShowSearchResult = () => {},
    onKeyUp = () => {}
}) => {
    const userInfo = useSelector(authSelector).userInfo;
    // console.log(userInfo);

    return (
        <Container isScrollDown={isScrollDown}>
                <ClickAwayListener onClickAway={onHideSearchResult}>
            <div className="searchBox">
                {isSearching ? (
                    <div className="loader">
                        <ClipLoader size={17} color="#fff" />
                    </div>
                ) : <></>}
                <div className="inputWrapper">
                    <input 
                        type="text" 
                        value={keySearch} 
                        onChange={onChangeKeySearch} 
                        onFocus={onShowSearchResult}
                        onKeyUp={onKeyUp}
                    />
                    <span className="searchIcon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                
                {isShowSearchResult ? (
                    <div className="searchResult">
                        <SearchResultComponent 
                            searchResult={searchResult} 
                            keySearch={keySearch} 
                            isSearched={isSearched} 
                            onSearchAll={onSearchAll}
                            onHideSearchResult={onHideSearchResult}
                        />
                    </div>
                ) : <></>}
            </div>
                </ClickAwayListener>
            <div className="listBtn">
                <div className="uploadBtn">
                    <StyledButtonUnderLine onClick={onPushToUpload}>
                        <i className="fas fa-cloud-upload-alt"></i>
                        <span className="text">Upload</span>
                    </StyledButtonUnderLine>
                </div>
                {userInfo ? (
                    <div className="avatar">
                        <AvatarCommon 
                            imgPath={userInfo.avatarUrl}
                        />
                        <div className="menuHeader">
                            <MenuHeaderModule />
                        </div>
                    </div>
                ) : (
                    <div className="loginBtn">
                        <StyledButton onClick={onShowLoginModal}>Đăng nhập</StyledButton>
                    </div>
                )}
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    transition: height 200ms, backdrop-filter 200ms;
    position: sticky;
    top: 0;
    z-index: 3;
    ${p => p.isScrollDown ? `
        height: 55px;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid ${p.theme.colors.gray_2};
        box-shadow: 0 2px 10px rgba(0, 0, 0, .5);
    ` : `
        height: 70px;
        backdrop-filter: blur(0);
        border-bottom: none;
    `}

    .searchBox {
        position: relative;

        .searchResult {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding-top: 5px;
        }

        .loader {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            z-index: 1;
        }
    }

    .inputWrapper {
        min-width: 300px;
        background-color: ${p => p.theme.colors.gray_1};
        border-radius: 100px;
        position: relative;

        ${breakpoint.breakMobile`
            min-width: 200px;
            max-width: 250px;
        `}

        .searchIcon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 10px;
            cursor: pointer;
        }
        
        input {
            padding: 12px 32px 12px 33px;
            height: 100%;
            width: 100%;
            color: #fff;
        }
    }

    .listBtn {
        display: flex;
        align-items: center;

        .uploadBtn {
            
            ${breakpoint.breakMobile`
                display: none;
            `}
        }

        .loginBtn,
        .avatar {
            margin-left: 20px;
        }

        .avatar {
            position: relative;

            &:hover {
                .menuHeader {
                    display: block;
                }
            }

            .menuHeader {
                position: absolute;
                top: 100%;
                right: 0;
                display: none;
            }
        }
    }
`;