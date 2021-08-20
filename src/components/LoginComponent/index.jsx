import styled from "styled-components";

import { InputCommon, StyledButton } from "src/components";

export const LoginComponent = ({
    values = {},
    errors = {},
    touched = {},
    isSubmitting = false,
    onChange,
    onBlur,
    onSubmit = () => {},
    onSwitchToRegister = () => {},
    onCloseModal = () => {}
}) => {
    return (
        <Container onSubmit={onSubmit}>
            <div className="close" onClick={onCloseModal}>
                <button type="button">&times;</button>
            </div>
            <div className="listFields">
                <InputCommon
                    label="Email"
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    name="email"
                />
                <InputCommon
                    label="Password"
                    type="password"
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                    onChange={onChange}
                    onBlur={onBlur}
                    name="password"
                />
            </div>
            <div className="button">
                <StyledButton type="submit">Đăng nhập</StyledButton>
            </div>
            <p className="switchForm">Bạn chưa có tài khoản? <span onClick={onSwitchToRegister}>Đăng ký</span></p>
        </Container>
    );
};

const Container = styled.form`
    background-color: ${p => p.theme.colors.main};
    display: flex;
    flex-direction: column;
    padding: 50px 30px 20px 30px;
    min-height: 370px;
    position: relative;

    .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;

        button {
            font-size: 25px;
        }
    }

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