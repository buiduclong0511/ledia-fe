import styled from "styled-components";

import { breakpoint, useWindowDimensions } from "src/utils";

export const SongItemComponent = ({
    data = {},
    isPlaying = false,
    isWaiting = false,
    onPlaySong = () => {},
    onAddSong = () => {}
}) => {
    const { width } = useWindowDimensions();
    return (
        width > 767 ? (
            <Container>
                <img src={data.cover} alt="" />
                <div className="overlay">
                    {isWaiting ? (
                        <>
                            {isPlaying ? (
                                <div className="status">Playing...</div>
                            ) : (
                                <div className="status">Waiting...</div>
                            )}
                        </>
                    ) : (
                        <div className="listBtn">
                            <button className="btn playBtn" onClick={onPlaySong}>
                                <i className={`far fa-${isPlaying ? 'pause' : 'play'}-circle`}></i>
                            </button>
                            {isWaiting ? <></> : (
                                <button className="btn addBtn" onClick={onAddSong}>
                                    <i className="fas fa-plus-circle"></i>
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        ) : (
            <ContainerMobile>
                <div className="coverImg">
                    <img src={data.cover} alt="" />
                </div>
                <div className="info">
                    <div className="name">{data.name}</div>
                    <div className="singer">{data.singer}</div>
                </div>
                <div className="listBtn">
                    <button className="btn playBtn" onClick={onPlaySong}>
                        <i className={`far fa-${isPlaying ? 'pause' : 'play'}-circle`}></i>
                    </button>
                    {isWaiting ? <></> : (
                        <button className="btn addBtn" onClick={onAddSong}>
                            <i className="fas fa-plus-circle"></i>
                        </button>
                    )}
                </div>
            </ContainerMobile>
        )
    );
};

const Container = styled.div`
    cursor: pointer;
    position: relative;
    margin: 10px;

    ${breakpoint.breakIpadPro`
        margin-bottom: 15px;
    `}

    &:hover {
        .overlay {
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        width: 100%;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: 300ms;

        .listBtn {
            display: flex;

            .btn {
                padding: 5px;
                font-size: 24px;
            }
        }
    }
`;

const ContainerMobile = styled.div`
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid ${p => p.theme.colors.gray_3};

    .coverImg {
        width: 80px;

        img {
            width: 100%;
        }
    }

    .info {
        padding-left: 10px;
        flex: 1;
    }

    .listBtn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 5px;

        .btn {
            margin: 5px 0;
            font-size: 23px;
        }
    }
`;