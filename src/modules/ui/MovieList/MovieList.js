import React from "react";
import "./MovieList.css"

import MovieCard from "../MovieCard/MovieCard";
import { useMovies } from "./useMovies";

const MovieList = () => {
    const { movies } = useMovies({ index: 0 })

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