import React from "react";
import './ButtonScrollToTop.css'
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../helpers";



const ButtonScrollToTop = () => {
    return (
        <div className='scrollBtn_box'>
            <Link onClick={scrollToTop}><button className="scrollBtn">
                up</button></Link>
        </div>
    )
}

export default ButtonScrollToTop