import { Formik } from 'formik';

import { REGISTER } from 'src/constants';
import { LoginComponent } from 'src/components';
import { loginSchema } from 'src/utils';

export const LoginModule = ({
    onCloseModal,
    onSwitch = () => {},
}) => {
    const handleSwitchToRegister = () => onSwitch(REGISTER);
    const initialValues = {
        email: "buiduclong0511@gmail.com",
        password: "123@abc"
    };
    const handleSubmit = (values) => {
        console.log(values);
    };
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