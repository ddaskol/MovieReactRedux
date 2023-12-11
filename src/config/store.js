import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../slices/movies"

export default configureStore({
    reducer: {
        movies: movieReducer

    }
})