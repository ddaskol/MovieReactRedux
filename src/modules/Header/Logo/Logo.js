import React from "react";

import "./logo.css"
import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="logo">
            {/* <Link to="/"><img src="/images/logo.png"></img></Link> */}
            <img src="/images/logo.png"></img>
        </div>
    )
}

export default Logo