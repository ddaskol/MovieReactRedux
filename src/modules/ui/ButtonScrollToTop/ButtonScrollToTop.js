import React from "react";
import './ButtonScrollToTop.css'
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../helpers/scrollToTop"


const ButtonScrollToTop = () => {
    return (
        <div className='scrollBtn_box'>
            <Link onClick={scrollToTop} className="scrollBtn_link">
                {/* <button className="scrollBtn"> */}
                <span class="material-symbols-outlined">
                    arrow_upward
                </span>
                {/* </button> */}
            </Link>
        </div>
    )
}

export default ButtonScrollToTop