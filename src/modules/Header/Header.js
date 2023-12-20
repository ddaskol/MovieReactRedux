import React from "react";

import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo"
import SearchLine from "../ui/Search/SearchLine";

import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <SearchLine />
        </header>
    )
}

export default Header