import React from "react";
import { MoviePageButtons } from "./MovieCardButtons/MovieCardButtons";

import "./MovieCard.css"

const MovieCard = ({
    type = "cardToMovieList"
}) => {
    return (
        <div className={`moviecard ${type}`}>
            {/* <div className="moviecard_backImg_box"> */}
            <img src="images/loki.jpg" className="moviecard_backImg"></img>
            <div className="darken_image"></div>
            {/* </div> */}
            <div className="moviecard_info">

                <div className="moviecard_title">
                    <h4>MovieName</h4>
                </div>
                <div className="moviecard_rateStar">
                    Rating
                </div>
                <div className="moviecard_ganre">
                    <p>Ganres</p>
                </div>
                <div className="moviecard_description">
                    <p>Sit magna ad sint cillum ullamco ea nostrud nostrud eu exercitation ut consequat. Ut labore consequat deserunt irure anim cupidatat nisi exercitation ea esse.</p>
                </div>
            </div>
            <div className="moviecard_buttons">
                <MoviePageButtons
                    type={type}
                />
            </div>

        </div>
    )
}

export default MovieCard