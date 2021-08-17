import styled from "styled-components";

import { SongItemModule } from "src/modules";

export const ListSongComponent = ({
    heading = "",
    listSongs = []
}) => {
    return (
        <Container>
            <h2 className="heading">{heading}</h2>
            <div className="listSongs">
                <div className="row">
                    {listSongs.map(song => {
                        return (
                            <div className="col l-2 m-4 c-12">
                                <SongItemModule data={song} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    margin-bottom: 40px;

    .heading {
        padding-bottom: 10px;
    }

    .listSongs {
        padding-top: 10px;
        padding-left: 10px;
    }
`;