import styled from "styled-components";

export const AddMenuComponent = ({
    onAddSongToPlaying = () => {}
}) => {
    return (
        <Container>
            <div className="addItem" onClick={onAddSongToPlaying}>
                Thêm vào danh sách đang phát
            </div>
            <div className="addItem">
                Thêm vào playlist
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.main};
    border-radius: 8px;
    overflow: hidden;
    
    .addItem {
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: ${p => p.theme.colors.secondary};
        }
    }
`;