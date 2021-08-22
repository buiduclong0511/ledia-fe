import styled from "styled-components";

import { ImageModule } from "src/modules";
import { AddMenuModule } from "src/modules";
import { breakpoint } from "src/utils";

export const SongItemSearchResultComponent = ({
    data = {},
    isLiked = false,
    isShowAddMenu = false,
    isPlaying = false,
    onAddSongToPlaying,
    onToggleAddMenu = () => {},
    onPlaySong = () => {}
}) => {
    return (
        <Container>
            <div className="info">
                <div className="image">
                    <ImageModule 
                        path={data.coverUrl} 
                        width={70}
                        height={70}
                    />
                </div>
                <div className="songNameNSinger">
                    <div className="songName">{data.songName}</div>
                    <div className="singer">{data.singer}</div>
                    <div className="controller mobile">
                        <button className="btn play" onClick={onPlaySong}>
                            <i className={`far fa-${isPlaying ? 'pause' : 'play'}-circle`}></i>
                        </button>
                        <button className="btn add" onClick={onToggleAddMenu}>
                            <i className="fas fa-plus-circle"></i>
                        </button>
                        <button className="btn like">
                            <i className={`${isLiked ? 'fas fa-heart' : 'far fa-heart'}`}></i>
                        </button>
                        {isShowAddMenu ? (
                            <div className="addMenu">
                                <AddMenuModule 
                                    onAddSongToPlaying={onAddSongToPlaying}
                                    onCloseAddMenu={onToggleAddMenu}
                                />
                            </div>
                        ) : <></>}
                    </div>
                </div>
            </div>
            <div className="controller desktop">
                <button className="btn play" onClick={onPlaySong}>
                    <i className={`far fa-${isPlaying ? 'pause' : 'play'}-circle`}></i>
                </button>
                <button className="btn add" onClick={onToggleAddMenu}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button className="btn like">
                    <i className={`${isLiked ? 'fas fa-heart' : 'far fa-heart'}`}></i>
                </button>
                {isShowAddMenu ? (
                    <div className="addMenu">
                        <AddMenuModule onAddSongToPlaying={onAddSongToPlaying} />
                    </div>
                ) : <></>}
            </div>
            <div className="viewsCount">
                {data.viewsCount} lượt nghe
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid ${p => p.theme.colors.gray_3};
    align-items: center;

    .desktop {
        display: block;

        ${breakpoint.breakMobileMedium`
            display: none;
        `}
    }

    .mobile {
        display: none;
        
        ${breakpoint.breakMobileMedium`
            display: block;
        `}
    }

    .info {
        display: flex;
        flex: 3;

        .image {
            margin-right: 10px;
        }
    }

    .controller {
        flex: 2;
        position: relative;
        
        .addMenu {
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 2;
        }

        .btn {
            padding: 5px;
            font-size: 20px;
        }
    }

    .viewsCount {
        flex: 1;
    }
`;