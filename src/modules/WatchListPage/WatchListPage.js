import React, { useEffect } from "react";
import "./WatchListPage.css"

import MovieList from "../ui/MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../api/fetchApiMovies";
import { setWatchListMovies } from "../../slices/movies";

const WatchListPage = () => {
    const ids = useSelector(state => state.movies.watchListMoviesIds)

    const dispatch = useDispatch()
    useEffect(() => {

        fetchMovies(ids).then(movies => dispatch(setWatchListMovies(movies)))
        console.log(1)
    }, [ids])


    return (
        <div className="watchList">
            <MovieList dataKey="watchListMovies" />
        </div>
    )
}

export default WatchListPage