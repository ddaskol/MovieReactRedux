import React from "react";

import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo"

import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
        </header>
    )
}

export default Header