import React from "react";
import "./MovieList.css"

import MovieCard from "../MovieCard/MovieCard";
import { useMovies } from "./useMovies";

const MovieList = (props) => {
    // {movies: moviesFromHook} ---> rename form "movies" to "moviesFromHook"
    const { movies: moviesFromHook } = useMovies({ index: 0 })

    const movies = props.movies || moviesFromHook
    return (
        <div className="movieList">
            {
                movies?.map(movie => (
                    <MovieCard
                        type="cardToMovieList"
                        key={movie.id}
                    >
                        <MovieCard.Image></MovieCard.Image>
                        <MovieCard.Info>
                            <MovieCard.Title to={movie.id}>{movie.title}</MovieCard.Title>
                            <MovieCard.Genre>{movie.genre}</MovieCard.Genre>
                        </MovieCard.Info>
                        <MovieCard.Buttons />
                    </MovieCard>
                ))
            }
        </div>
    )
}

export default MovieList