import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../api/fetchPopularMovies";
import MovieCard from "../ui/MovieCard/MovieCard";
import MovieList from "../ui/MovieList/MovieList";
import { useMovies } from "../ui/MovieList/useMovies";
import Slider from "../ui/Slider/Slider";

import "./HomePage.css"

const HomePage = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchPopularMovies()
            .then(movies => {
                setMovies(movies)
            })

    }, [])

    return (
        <>
            <div className="homePage">
                <Slider />
                <div className="homePage_body">
                    <div className="homePage_title">
                        <h3>Popular on Host</h3>
                    </div>
                    <MovieList
                        movies={movies}
                    />
                </div>
            </div>



        </>
    )
}

export default HomePage