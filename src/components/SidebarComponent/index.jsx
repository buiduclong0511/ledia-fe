import styled from "styled-components";

export const SidebarComponent = () => {
    return (
        <Container>
            <div className="logo">
                <img src="images/logos/logo.png" alt="" className="logoImg" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: 1px 0 10px rgba(0, 0, 0, .5);
    position: sticky;
    top: 0;
    
    .logo {
        display: flex;
        justify-content: center;
        padding-top: 10px;

        .logoImg {
            width: 35%;
        }
    }
`;