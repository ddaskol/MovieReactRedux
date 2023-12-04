import React, { useState } from "react";

import "./BurgerMenu.css"
import DefaultMenu from "./DefaultMenu/DefaultMenu";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div className="burger_menu">
            <div className={`burger_icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {
                isOpen && (
                    <div className="mobile_menu">
                        <DefaultMenu type="additional" />
                    </div>
                )
            }

        </div>
    )
}

export default BurgerMenu