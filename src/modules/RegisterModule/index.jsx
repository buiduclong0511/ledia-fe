import { Formik } from 'formik';

import { RegisterComponent } from 'src/components';
import { LOGIN } from 'src/constants';
import { registerSchema } from 'src/utils';

export const RegisterModule = ({
    onCloseModal,
    onSwitch = () => {}
}) => {
    const handleSwitchToLogin = () => onSwitch(LOGIN);
    const initialValues = {
        email: "buiduclong0511@gmail.com",
        password: "123@abc",
        confirmPassword: "123@abc"
    };
    const handleSubmit = (values) => {
        console.log(values);
    };
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