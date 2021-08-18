import styled from "styled-components";

import { InputCommon, StyledButton } from "src/components";

export const LoginComponent = ({
    onSwitchToRegister = () => {}
}) => {
    return (
        <Container>
            <div className="listFields">
                <InputCommon
                    label="Email"
                />
                <InputCommon
                    label="Password"
                    type="password"
                />
            </div>
            <div className="button">
                <StyledButton>Đăng nhập</StyledButton>
            </div>
            <p className="switchForm">Bạn chưa có tài khoản? <span onClick={onSwitchToRegister}>Đăng ký</span></p>
        </Container>
    );
};

const Container = styled.form`
    background-color: ${p => p.theme.colors.main};
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    min-height: 350px;

    .listFields {
        flex: 1;
    }

    .switchForm {
        padding-top: 10px;

        span {
            transition: 300ms;

            &:hover {
                color: ${p => p.theme.colors.orange};
                cursor: pointer;
            }
        }
    }
`;