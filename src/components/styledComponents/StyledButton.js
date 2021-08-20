import styled from "styled-components";

import { breakpoint } from "src/utils";

export const StyledButton = styled.button`
    background-color: ${p => p.disabled ? "#ccc" : p.theme.colors.main};
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 5px;
    transition: 300ms;
    width: 100%;
    cursor: ${p => p.disabled ? "not-allowed" : "pointer"};

    ${breakpoint.breakMobile`
        padding: 10px;
        font-size: 12px;
    `}

    &:hover {
        background-color: ${p => p.disabled ? "#ccc" : p.theme.colors.orange};
    }
`;

export const StyledButtonUnderLine = styled.button`
    font-size: 15px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-color: #fff;
    }

    .text {
        margin-left: 5px;
    }
`;