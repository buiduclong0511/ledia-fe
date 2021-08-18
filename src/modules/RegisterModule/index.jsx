import { Formik } from 'formik';

import { RegisterComponent } from 'src/components';
import { LOGIN } from 'src/constants';

export const RegisterModule = ({
    onSwitch = () => {}
}) => {
    const handleSwitchToLogin = () => onSwitch(LOGIN);

    return (
        <RegisterComponent onSwitchToLogin={handleSwitchToLogin} />
    );
};