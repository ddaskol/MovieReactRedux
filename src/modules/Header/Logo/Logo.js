import React from "react";

import "./logo.css"
import { Link } from "react-router-dom"
import { scrollToTop } from "../../../helpers/scrollToTop";

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" onClick={scrollToTop}>
                <h1>MOVIE˚dk </h1>
            </Link>
        </div>
    )
}

export default Logo