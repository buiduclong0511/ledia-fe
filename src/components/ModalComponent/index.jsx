import styled from "styled-components";

export const ModalComponent = ({
    children = null
}) => {
    return (
        <Container>
            <div className="overlay"></div>
            <div className="modalContent">
                {children}
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;

    .modalContent {
        z-index: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
    }
`;