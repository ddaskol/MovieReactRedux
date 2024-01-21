import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersMovie } from "../../api/fetchApiMovies";
import { setPopularMovies } from "../../slices/movies";
import Filters from "../ui/Filters/Filters";
import MovieList from "../ui/MovieList/MovieList";
import "./SelectMoviePage.css"

const SelectMoviePage = () => {
    const { genre, country, year } = useSelector(state => state.movies.activeFilters)

    const dispatch = useDispatch()
    useEffect(() => {
        filtersMovie({ genre, country, year })
            .then(data => {
                dispatch(setPopularMovies(data))
            })

    }, [genre, country, year])



    return (
        <div className="SelectMoviePage">
            <div className="SelectMoviePage_filters">
                <div className="page_title">
                    <h4>Filters</h4>
                </div>
                <Filters />
            </div>
            <div className="SelectMoviePage_films">
                <div className="page_title">
                    <h4>Films</h4>
                </div>
                <MovieList dataKey="popularMovies" />
            </div>
        </div>
    )
}

export default SelectMoviePage