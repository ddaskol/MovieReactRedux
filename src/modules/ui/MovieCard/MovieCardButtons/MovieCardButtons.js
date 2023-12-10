import React from "react";
import "./MovieCardButtons.css"

export const MovieCardButtons = ({
    type = "inMovieCard"
}) => {
    return (
        <>
            <div className={"movieCardButtons buttonPlus"}>
                <div className="movieCardButtons_img"><img src="/images/plus.png"></img></div>
                <p className="movieCardButtons_text">Watchlist</p>
                <div class="movieCardButtons_darken"></div>
            </div>
            <div className={"movieCardButtons buttonWatch"}>
                <div className="movieCardButtons_img"><img src="/images/plus.png"></img></div>
                <p className="movieCardButtons_text">Watchlist</p>
                <div class="movieCardButtons_darken"></div>
            </div>
        </>
    )
}


