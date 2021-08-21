import styled from "styled-components";

import { ImageModule } from "src/modules";

export const SearchResultComponent = ({
    searchResult = {
        songs: [],
        playlists: []
    },
    keySearch = "",
    isSearched = false,
    onSearchAll = () => {}
}) => {
    // console.log(searchResult);
    return (
        <Container>
            {searchResult.songs.length ? (
                <div className="listSongs">
                    <div className="heading">Bài hát</div>
                    {searchResult.songs.map(song => {
                        return (
                            <div key={song._id} className="songItem">
                                <div className="cover">
                                    <ImageModule path={song.coverUrl} />
                                </div>
                                <div className="info">
                                    <p className="songName">{song.songName}</p>
                                    <p className="singer">{song.singer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : <></>}
            {searchResult.playlists.length ? (
                <div className="listSongs">
                    <div className="heading">Playlist</div>
                    <div className="songItem">
                        <div className="cover">
                            <ImageModule path="images/ha-con-vuong-nang.jpg" />
                        </div>
                        <div className="info">
                            <p className="songName">SongName</p>
                            <p className="singer">singer</p>
                        </div>
                    </div>
                    <div className="songItem">
                        <div className="cover">
                            <ImageModule path="images/ha-con-vuong-nang.jpg" />
                        </div>
                        <div className="info">
                            <p className="songName">SongName</p>
                            <p className="singer">singer</p>
                        </div>
                    </div>
                    <div className="songItem">
                        <div className="cover">
                            <ImageModule path="images/ha-con-vuong-nang.jpg" />
                        </div>
                        <div className="info">
                            <p className="songName">SongName</p>
                            <p className="singer">singer</p>
                        </div>
                    </div>
                </div>
            ) : <></>}
            {!isSearched ? (
                <div className="searchAll">
                    Nhập từ khóa...
                </div>
            ) : searchResult.songs.length || searchResult.playlists.length ? (
                <div className="searchAll" onClick={onSearchAll}>
                    Tìm tất cả kết quả với: {keySearch}
                </div>
            ) : (
                <div className="searchAll">
                    Không tìm thấy kết quả nào
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    border-radius: 10px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, .5);
    border: 1px solid ${p => p.theme.colors.gray_1};
    overflow: hidden;

    .listSongs {
        .heading {
            padding-left: 15px;
            padding-bottom: 5px;
            padding-top: 10px;
        }
    }

    .songItem {
        display: flex;
        padding: 10px 27px;
        cursor: pointer;

        &:hover {
            background-color: ${p => p.theme.colors.main};
        }

        .info {
            padding-left: 5px;

            .songName {
                text-overflow: ellipsis;
            }

            .singer {
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: calc(100% - 10px);
                overflow: hidden;
                font-size: 13px;
            }
        }
    }

    .searchAll {
        padding: 15px;
        cursor: pointer;

        &:hover {
            background-color: ${p => p.theme.colors.main};
        }
    }
`;