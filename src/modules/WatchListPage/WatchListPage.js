import React from "react";
import "./WatchListPage.css"

import MovieCard from "../ui/MovieCard/MovieCard";
import MovieList from "../ui/MovieList/MovieList";
import MoviePage from "../ui/MoviePage/MoviePage";

const WatchListPage = () => {
    return (
        <div className="watchList">
            <MoviePage />
        </div>
    )
}

export default WatchListPage