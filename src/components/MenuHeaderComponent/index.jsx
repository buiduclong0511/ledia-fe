import styled from "styled-components";

export const MenuHeaderComponent = ({
    onClickLogout = () => {}
}) => {
    return (
        <Container>
            <div className="menuItem">
                <span className="icon">
                    <i className="far fa-id-badge"></i>
                </span>
                <span className="text">
                    Profile
                </span>
            </div>
            <div className="menuItem" onClick={onClickLogout}>
                <span className="icon">
                    <i className="fas fa-sign-out-alt"></i>
                </span>
                <span className="text">
                    Đăng xuất
                </span>
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.main};
    min-width: 150px;
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 5px;

    .menuItem {
        display: flex;
        padding: 10px 0;
        cursor: pointer;

        .icon {
            display: inline-block;
            width: 25px;
        }
    }
`;