import styled from "styled-components";

import { StyledButton, StyledButtonUnderLine } from "src/components";
import { breakpoint } from "src/utils";

export const HeaderComponent = ({
    isScrollDown = false,
    onToggleShowLoginModal = () => {}
}) => {
    return (
        <Container isScrollDown={isScrollDown}>
            <div className="searchBox">
                <div className="inputWrapper">
                    <input type="text" />
                    <span className="searchIcon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div className="listBtn">
                <div className="uploadBtn">
                    <StyledButtonUnderLine>
                        <i className="fas fa-cloud-upload-alt"></i>
                        <span className="text">Upload</span>
                    </StyledButtonUnderLine>
                </div>
                <div className="loginBtn">
                    <StyledButton onClick={onToggleShowLoginModal}>Đăng nhập</StyledButton>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    transition: height 200ms, backdrop-filter 200ms;
    position: sticky;
    top: 0;
    z-index: 3;
    ${p => p.isScrollDown ? `
        height: 55px;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid ${p.theme.colors.gray_2};
        box-shadow: 0 2px 10px rgba(0, 0, 0, .5);
    ` : `
        height: 70px;
        backdrop-filter: blur(0);
        border-bottom: none;
    `}

    .inputWrapper {
        min-width: 300px;
        background-color: ${p => p.theme.colors.gray_1};
        border-radius: 100px;
        position: relative;

        ${breakpoint.breakMobile`
            min-width: 200px;
            max-width: 250px;
        `}

        .searchIcon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            cursor: pointer;
        }
        
        input {
            padding: 12px 32px 12px 20px;
            height: 100%;
            width: 100%;
            color: #fff;
        }
    }

    .listBtn {
        display: flex;
        align-items: center;

        .uploadBtn {
            
            ${breakpoint.breakMobile`
                display: none;
            `}
        }

        .loginBtn {
            margin-left: 20px;
        }
    }
`;