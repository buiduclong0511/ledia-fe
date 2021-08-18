import { Formik } from 'formik';

import { REGISTER } from 'src/constants';
import { LoginComponent } from 'src/components';

export const LoginModule = ({
    onSwitch = () => {}
}) => {
    const handleSwitchToRegister = () => onSwitch(REGISTER);
    return (
        <LoginComponent onSwitchToRegister={handleSwitchToRegister} />
    );
};