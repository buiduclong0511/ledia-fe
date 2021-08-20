import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { REGISTER } from 'src/constants';
import { LoginComponent } from 'src/components';
import { loginSchema } from 'src/utils';
import { login } from 'src/redux';
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
            if (res) {
                onCloseModal();
            }
        } catch (err) {
            console.log(err.response);
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