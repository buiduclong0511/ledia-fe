import styled from "styled-components";

import { InputCommon, StyledButton } from "src/components";

export const RegisterComponent = ({
    onSwitchToLogin = () => {}
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
                <InputCommon
                    label="Confirm password"
                    type="password"
                />
            </div>
            <div className="button">
                <StyledButton>Đăng ký</StyledButton>
            </div>
            <p className="switchForm">Bạn đã có tài khoản? <span onClick={onSwitchToLogin}>Đăng nhập</span></p>
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