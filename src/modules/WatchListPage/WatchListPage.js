import React from "react";
import "./WatchListPage.css"

import MovieList from "../ui/MovieList/MovieList";

const WatchListPage = () => {
    return (
        <div className="watchList">
            <MovieList dataKey="watchListMovies" />
        </div>
    )
}

export default WatchListPage