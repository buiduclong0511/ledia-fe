import styled from "styled-components";

import { SongItemModule } from "src/modules";
import { LoaderCommon } from "src/components";

export const ListSongComponent = ({
    heading = "",
    listSongs = [],
    isFetching = false
}) => {
    return (
        <Container>
            <h2 className="heading">{heading}</h2>
            <div className="listSongs">
                <div className="grid">
                        <div className="row">
                            {listSongs.map(song => {
                                return (
                                    <div key={song.key} className="col l-2 m-4 c-12">
                                        <SongItemModule data={song} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                {isFetching ? (
                    <LoaderCommon
                        padding={30}
                    />
                ) : <></>}
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