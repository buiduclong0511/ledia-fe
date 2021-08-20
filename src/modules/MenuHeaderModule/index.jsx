import { useDispatch } from "react-redux";

import { MenuHeaderComponent } from "src/components";
import { logout } from "src/redux";

export const MenuHeaderModule = () => {
    const dispatch = useDispatch();

    // handle function
    const handleLogout = () => {
        dispatch(logout());
    };
    // handle function
    return (
        <MenuHeaderComponent
            onClickLogout={handleLogout}
        />
    );
};