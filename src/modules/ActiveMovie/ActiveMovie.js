import React, { useEffect } from "react";
import "./ActiveMovie.css"

import { useLoaderData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRecommendationMovies } from "../../api/fetchApiMovies";
import movies, { setPopularMovies } from "../../slices/movies";

import MovieCard from "../ui/MovieCard/MovieCard";
import Slider from "../ui/Slider/Slider";
import { scrollToTop } from "../../helpers/scrollToTop";

const ActiveMovie = () => {
    const { id } = useParams()

    const { movie } = useLoaderData();
    console.log(movie)

    useEffect(() => {
        scrollToTop()
    }, [id])

    const dispatch = useDispatch()
    useEffect(() => {
        fetchRecommendationMovies(id)
            .then(movies => {
                dispatch(setPopularMovies(movies))
            })

    }, [id])

    return (
        <>
            <MovieCard
                key={movie.id}
                type=" cardActiveMovie"
            >
                <MovieCard.Image
                    size="big"
                >{movie.poster_path}</MovieCard.Image>
                <MovieCard.Info>
                    <MovieCard.Title to={movie.id}>{movie.title}</MovieCard.Title>
                    <MovieCard.Rating>{movie.vote_average}</MovieCard.Rating>
                    <MovieCard.GenreBlock>
                        {movie.genres.map((ganre) =>
                        (<MovieCard.Genre>
                            <p className="">{ganre.name}</p>
                        </MovieCard.Genre>
                        ))}
                    </MovieCard.GenreBlock>
                    <MovieCard.Description>{movie.overview}</MovieCard.Description>
                </MovieCard.Info>
                <MovieCard.Buttons
                    id={movie.id}
                />
            </MovieCard>
            <Slider
            // type="toActiveMovie"
            />
        </>
    )
}

export default ActiveMovie