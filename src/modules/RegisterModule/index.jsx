import { unwrapResult } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { RegisterComponent } from 'src/components';
import { LOGIN } from 'src/constants';
import { register, showToast } from 'src/redux';
import { registerSchema } from 'src/utils';

export const RegisterModule = ({
    onCloseModal = () => {},
    onSwitch = () => {}
}) => {
    const dispatch = useDispatch();

    const initialValues = {
        email: "buiduclong0511@gmail.com",
        password: "123@abc",
        confirmPassword: "123@abc"
    };

    // handle function
    const handleSwitchToLogin = () => onSwitch(LOGIN);
    const handleSubmit = async (values) => {
        try {
            const res = await dispatch(register(values));
            unwrapResult(res);
            onCloseModal();
        } catch (err) {
            if (err.response.status === 409) {
                dispatch(showToast({
                    message: "Email đã được đăng ký",
                    type: "error"
                }));
            } else {
                dispatch(showToast({
                    message: "Có lỗi xảy ra!",
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
            validationSchema={registerSchema}
        >
            {props => {
                const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
                return (
                    <RegisterComponent 
                        onSwitchToLogin={handleSwitchToLogin} 
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