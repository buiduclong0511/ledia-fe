import { useEffect, useState } from "react";

import { HeaderComponent } from "src/components";

export const HeaderModule = () => {
    const [isScrollDown, setIsScrollDown] = useState(false);

    const toggleIsScrollDown = () => {
        setIsScrollDown(window.scrollY > 50);
    };

    useEffect(() => {
        document.addEventListener("scroll", toggleIsScrollDown);

        return () => {
            document.removeEventListener("scroll", toggleIsScrollDown);
        };
    }, []);
    return (
        <HeaderComponent isScrollDown={isScrollDown} />
    );
};