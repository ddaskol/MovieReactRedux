import React from "react";
import "./ButtonPlus.css"

const ButtonPlus = ({
    type = "inMovieCard"
}) => {
    return (
        <div className={`buttonPlus ${type}`}>
            <div className="buttonPlus_plus"><img src="./images/plus.png"></img></div>
            <p className="buttonPlus_text">Watchlist</p>
            <div class="buttonPlus_darken"></div>
        </div>
    )
}

export default ButtonPlus