import styled from "styled-components";

export const AvatarCommon = ({
    imgPath = "",
    width = 40
}) => {
    return (
        <Container width={width}>
            {imgPath ? (
                <img src={imgPath} alt="" className="avatar" />
            ) : (
                <div className="noAvatar">
                    <i className="far fa-user"></i>
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    cursor: pointer;
    width: ${p => p.width + "px"};
    height: ${p => p.width + "px"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${p => p.theme.colors.secondary};
    border-radius: 50%;
    background-color: ${p => p.theme.colors.secondary};
`;