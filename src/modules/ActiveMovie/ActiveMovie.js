import React, { useEffect } from "react";
import "./ActiveMovie.css"

import MovieCard from "../ui/MovieCard/MovieCard";
// import { MovieInfo } from "../ui/MovieCard/MovieCard";

import { useMovies } from "../ui/MovieList/useMovies";
import { useLoaderData, useParams } from "react-router-dom";



const ActiveMovie = () => {
    const { id } = useParams()
    const { movies } = useMovies({ id })
    const { movie } = useLoaderData();

    useEffect(() => { }, [id])


    return (
        <MovieCard
            key={movie.id}
            type="cardToMoviePage"
        >
            <MovieCard.Image></MovieCard.Image>
            <MovieCard.Info>
                <MovieCard.Title to={movie.id}>{movie.title}</MovieCard.Title>
                <MovieCard.Rating>{movie.rating}</MovieCard.Rating>
                <MovieCard.Genre>{movie.genre}</MovieCard.Genre>
            </MovieCard.Info>
            <MovieCard.Buttons />
        </MovieCard>
    )
}

export default ActiveMovie