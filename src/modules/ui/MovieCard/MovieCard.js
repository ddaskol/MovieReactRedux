import React from "react";
import "./MovieCard.css"

import { MovieCardButtons } from "./MovieCardButtons/MovieCardButtons";

import { Link } from "react-router-dom";


//compound component 
const MovieTitle = ({ to, children, clearQuery }) => {
    return <div className="moviecard_title">
        <h4>
            <Link to={`/movie/${to}`} className="moviecard_title_Link" onClick={clearQuery}>{children}</Link>
        </h4>
    </div>
}

const MovieRating = ({ children }) => {
    const convertRating = (rating) => {
        switch (true) {
            case rating >= 8:
                return <>&#128516;</>
            case rating >= 6:
                return <>&#128519;</>
            case rating >= 5:
                return <>&#128528;</>
            default:
                return <>&#128530;</>
        }
    }
    const emojiCode = convertRating(children)

    return <div className="moviecard_rateStar">
        <span title={children}>Rating {emojiCode}</span>
    </div>
}

const MovieGenre = ({ children }) => {
    return <div className="moviecard_genre">
        {children}
    </div>

}
const MovieGenre_block = ({ children }) => {
    return <div className="moviecard_genres_block">
        {React.Children.map(children, item => item)}
    </div>
}

const MovieDescription = ({ children }) => {
    return <div className="moviecard_description">
        {children}
    </div>
}

export const MovieInfo = ({ children }) => {
    return (
        <div className="moviecard_info">
            {React.Children.map(children, item => item)}
        </div>
    )
}

const MovieImage = ({ size = 'small', children }) => {
    const sizePath = size === 'small' ? 'w500' : 'original'

    return < div className="darken_image" >
        <img src={`https://image.tmdb.org/t/p/${sizePath}${children}`} className="moviecard_backImg"></img>
    </div >
}
const MovieButtons = ({ id }) => {
    return <div className="movieCardButtons_container">
        <MovieCardButtons
            id={id}
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
MovieCard.GenreBlock = MovieGenre_block
MovieCard.Info = MovieInfo
MovieCard.Title = MovieTitle
MovieCard.Rating = MovieRating
MovieCard.Genre = MovieGenre
MovieCard.Description = MovieDescription

MovieCard.Image = MovieImage
MovieCard.Buttons = MovieButtons


export default MovieCard