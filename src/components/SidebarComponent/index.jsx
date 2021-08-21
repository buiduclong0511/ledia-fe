import { Link } from "react-router-dom";
import styled from "styled-components";

import { PATH_HOME } from "src/routes";

export const SidebarComponent = () => {
    return (
        <Container>
            <Link to={PATH_HOME} className="logo">
                <img src="https://res.cloudinary.com/dyhgnyjpb/image/upload/v1629535306/ImagesUploads/logo_yqfwvx.png" alt="" className="logoImg" />
            </Link>
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