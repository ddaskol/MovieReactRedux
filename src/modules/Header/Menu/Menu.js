import React from "react";
import SearchLine from "../../ui/Search/SearchLine";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import DefaultMenu from "./BurgerMenu/DefaultMenu/DefaultMenu";

import "./menu.css"

const Menu = () => {
    return (
        <>
            <DefaultMenu />
            <BurgerMenu />
        </>
    )
}

export default Menu