import styled from "styled-components";

import { StyledButton, StyledButtonUnderLine } from "src/components";

export const HeaderComponent = ({
    isScrollDown = false
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
                <div className="loginButton">
                    <StyledButton>Đăng nhập</StyledButton>
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
    transition: height 300ms, backdrop-filter 300ms;
    ${p => p.isScrollDown ? `
        height: 55px;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid ${p.theme.colors.gray_1};
    ` : `
        height: 70px;
        backdrop-filter: blur(0);
        border-bottom: none;
    `}

    .inputWrapper {
        width: 250px;
        background-color: ${p => p.theme.colors.gray_1};
        border-radius: 100px;
        position: relative;

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
            margin-right: 20px;
        }
    }
`;