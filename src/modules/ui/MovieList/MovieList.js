import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"

const MovieList = () => {
    return (
        <div className="movieList">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}

export default MovieList