import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { HeaderComponent, ModalComponent } from "src/components";
import { LOGIN } from "src/constants";
import { LoginModule, RegisterModule } from "src/modules";
import { PATH_UPLOAD } from "src/routes";

export const HeaderModule = () => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [screen, setScreen] = useState(LOGIN);
    const [isShowLoginModal, setIsShowLoginModal] = useState(false);
    const history = useHistory();

    const toggleIsScrollDown = () => {
        setIsScrollDown(window.scrollY > 50);
    };

    // effect
    useEffect(() => {
        document.addEventListener("scroll", toggleIsScrollDown);

        return () => {
            document.removeEventListener("scroll", toggleIsScrollDown);
        };
    }, []);
    // effect

    // handle function
    const handleSwitch = (screen) => {
        setScreen(screen);
    };

    const handleToggleShowLoginModal = () => {
        setIsShowLoginModal(!isShowLoginModal);
    };

    const handlePushToUpload = () => {
        history.push(PATH_UPLOAD);
    };
    //handle function

    return (
        <>
            <HeaderComponent 
                isScrollDown={isScrollDown}
                onToggleShowLoginModal={handleToggleShowLoginModal}
                onPushToUpload={handlePushToUpload}
            />
            {isShowLoginModal ? (
                <ModalComponent>
                    {screen === LOGIN ? (
                        <LoginModule onSwitch={handleSwitch} onCloseModal={handleToggleShowLoginModal} />
                    ) : (
                        <RegisterModule onSwitch={handleSwitch} onCloseModal={handleToggleShowLoginModal} />
                    )}
                </ModalComponent>
            ) : <></>}
        </>
    );
};