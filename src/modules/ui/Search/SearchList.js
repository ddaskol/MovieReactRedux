import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const SearchList = ({
    clearQuery,
    query: clearList
}) => {
    const searchedMovies = useSelector((state) => state.movies.searchedMovies)
    return (
        <div className={`searchedList ${clearList ? 'openList' : ''}`}>
            {
                searchedMovies.map((movie) => {
                    return <MovieCard
                        type="toSearchList"
                        key={movie.id}
                    >
                        <MovieCard.Image>{movie.poster_path}</MovieCard.Image>
                        <MovieCard.Info>
                            <MovieCard.Title
                                to={movie.id}
                                clearQuery={clearQuery}
                            >
                                {movie.title}
                            </MovieCard.Title>
                            <MovieCard.Genre>{movie.genre}</MovieCard.Genre>
                        </MovieCard.Info>
                        <MovieCard.Buttons
                            id={movie.id}
                        />
                    </MovieCard>
                })

            }
        </div>
    )
}




export default SearchList