import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { REGISTER } from 'src/constants';
import { LoginComponent } from 'src/components';
import { loginSchema } from 'src/utils';
import { login, showToast } from 'src/redux';
import { unwrapResult } from '@reduxjs/toolkit';

export const LoginModule = ({
    onCloseModal = () => {},
    onSwitch = () => {},
}) => {
    const dispatch = useDispatch();

    const initialValues = {
        email: "buiduclong0511@gmail.com",
        password: "123@abc"
    };

    // handle function
    const handleSwitchToRegister = () => onSwitch(REGISTER);

    const handleSubmit = async (values) => {
        try {
            const res = await dispatch(login(values));
            unwrapResult(res);
            onCloseModal();
        } catch (err) {
            if (err.response.status === 401) {
                dispatch(showToast({
                    message: "Sai tài khoản hoặc mật khẩu!",
                    type: "error"
                }));
            } else {
                dispatch(showToast({
                    message: "Lỗi đăng nhập!",
                    type: "error"
                }));
            }
        }
    };
    // handle function
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
        >
            {props => {
                const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
                return (
                    <LoginComponent 
                        onSwitchToRegister={handleSwitchToRegister} 
                        values={values}
                        errors={errors}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        onCloseModal={onCloseModal}
                    />
                );
            }}
        </Formik>
    );
};