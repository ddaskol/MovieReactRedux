import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../api/fetchMovies";

const mockedMovie = {
    image: "image",
    id: "",
    title: "",
    subtitle: ""
}

export const useMovies = ({ index, id }) => {
    const [currentMovie, setCurrentMovie] = useState(mockedMovie)
    const [movies, setMovies] = useState([
        mockedMovie
    ])

    useEffect(() => {
        fetchMovies().then(movies => {
            setMovies(movies)
            if (index !== undefined) {
                setCurrentMovie(movies[index])
            } else if (id !== undefined) {
                const searchedMovie = movies.find((movie) => movie.id == id)
                searchedMovie && setCurrentMovie(searchedMovie)
            }
        })
    }, [index, id])
    return { movies, currentMovie }

}
