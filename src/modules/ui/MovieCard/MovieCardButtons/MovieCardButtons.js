import React from "react";
import "./MovieCardButtons.css"

export const MoviePageButtons = ({
    type = "inMovieCard"
}) => {
    return (
        <>
            <div className={"moviePageButtons buttonPlus"}>
                <div className="moviePageButtons_img"><img src="./images/plus.png"></img></div>
                <p className="moviePageButtons_text">Watchlist</p>
                <div class="moviePageButtons_darken"></div>
            </div>
            <div className={"moviePageButtons buttonWatch"}>
                <div className="moviePageButtons_img"><img src="./images/plus.png"></img></div>
                <p className="moviePageButtons_text">Watchlist</p>
                <div class="moviePageButtons_darken"></div>
            </div>
        </>
    )
}


