import React from "react";
import { MovieCardButtons } from "./MovieCardButtons/MovieCardButtons";

import "./MovieCard.css"
import { Link } from "react-router-dom";


const MovieTitle = ({ to, children }) => {
    return <div className="moviecard_title">
        <h4>
            <Link to={`/movie/${to}`} className="moviecard_title_Link">{children}</Link>
        </h4>
    </div>
}

const MovieRating = ({ children }) => {
    return <div className="moviecard_rateStar">
        {children}
    </div>
}

const MovieGenre = ({ children }) => {
    return <div className="moviecard_ganre">
        <p>
            {children}
        </p>
    </div>
}

export const MovieInfo = ({ children }) => {
    return (
        <div className="moviecard_info">
            {React.Children.map(children, item => item)}
        </div>
    )
}


const MovieImage = () => {
    return <div className="darken_image">
        <img src="/images/loki.jpg" className="moviecard_backImg"></img>
    </div>
}
const MovieButtons = () => {
    return <div className="movieCardButtons">
        <MovieCardButtons
        // type={type}
        />
    </div>
}

const MovieCard = ({
    children,
    type = "cardToMovieList"
}) => {
    return (
        <div className={`moviecard ${type}`}>
            {React.Children.map(children, item => item)}
        </div>
    )
}
MovieCard.Info = MovieInfo
MovieCard.Title = MovieTitle
MovieCard.Rating = MovieRating
MovieCard.Genre = MovieGenre

MovieCard.Image = MovieImage
MovieCard.Buttons = MovieButtons


export default MovieCard