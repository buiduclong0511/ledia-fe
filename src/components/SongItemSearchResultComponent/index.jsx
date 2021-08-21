import styled from "styled-components";

import { ImageModule } from "src/modules";

export const SongItemSearchResultComponent = ({
    data = {}
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
                </div>
            </div>
            <div className="controller">
                controller
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

    .info {
        display: flex;
        flex: 3;

        .image {
            margin-right: 10px;
        }
    }

    .controller {
        flex: 2;
    }

    .viewsCount {
        flex: 1;
    }
`;