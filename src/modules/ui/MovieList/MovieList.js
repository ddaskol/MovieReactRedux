import React from "react";
import "./MovieList.css"

import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ dataKey }) => {
    const movies = useSelector((state) => state.movies[dataKey])

    return (
        <div className="movieList">
            {
                movies?.map(movie => (
                    <MovieCard
                        type="cardToMovieList"
                        key={movie.id}
                    >
                        <MovieCard.Image>{movie.poster_path}</MovieCard.Image>
                        <MovieCard.Info>
                            <MovieCard.Title to={movie.id}>{movie.title}</MovieCard.Title>
                            <MovieCard.Genre>{movie.genre}</MovieCard.Genre>
                        </MovieCard.Info>
                        <MovieCard.Buttons
                            id={movie.id}
                        />
                    </MovieCard>
                ))
            }
        </div>
    )
}

export default MovieList