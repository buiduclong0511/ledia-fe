import styled from "styled-components";

export const SongItemComponent = ({
    data = {}
}) => {
    console.log(data);
    return (
        <Container>
            <img src={data.cover} alt="" />
            <div className="overlay">
                <div className="listBtn">
                    <button className="btn playBtn">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button className="btn addBtn">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    cursor: pointer;
    position: relative;

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