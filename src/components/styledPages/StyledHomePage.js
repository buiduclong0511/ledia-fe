import styled from "styled-components";

import { breakpoint } from "src/utils";

export const StyledHomePage = styled.div`
    padding: 0 20px 50px 20px;

    .banner {
        margin: 20px 50px 50px 50px;
        border-radius: 30px;
        background-image: url("images/banners/banner.jpg");
        height: 300px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        ${breakpoint.breakMobile`
            display: none;
        `}
    }
`;