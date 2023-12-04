import React from "react";
import Filters from "../ui/Filters/Filters";
import MovieList from "../ui/MovieList/MovieList";
import "./SelectMoviePage.css"

const SelectMoviePage = () => {
    return (
        <div className="SelectMoviePage">
            {/* <div className="SelectMoviePage_body"> */}
            <div className="SelectMoviePage_filters">
                <div className="SelectMoviePage_title">
                    <h4>Filters</h4>
                </div>
                <Filters />
            </div>
            <div className="SelectMoviePage_films">
                <div className="SelectMoviePage_title">
                    <h4>Films</h4>
                </div>
                <MovieList />
            </div>
            {/* </div> */}
        </div>
    )
}

export default SelectMoviePage