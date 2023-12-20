import { createSelector, createSlice } from '@reduxjs/toolkit'
import { getItem, saveItem } from '../helpers/watchlist'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        searchedMovies: [],
        // watchListMovies: [],
        watchListMovies: getItem({ key: "watchListMovies" }) || [],

    },

    reducers: {
        setPopularMovies(state, action) {
            state.popularMovies = action.payload
        },
        setSearchedMovies(state, action) {
            state.searchedMovies = action.payload
        },
        clearSearchMovies(state, action) {
            state.searchedMovies = []
        },
        addMovieToWatchList(state, action) {
            const id = action.payload
            const movie = state.popularMovies.find(movie => movie.id == id)
            if (movie) {
                const movies = [movie, ...state.watchListMovies]

                state.watchListMovies = movies
                saveItem({ key: "watchListMovies", value: movies })
            }
        },
        removeMovieWatchList(state, action) {
            const id = action.payload
            const movies = state.watchListMovies.filter(movie => movie.id !== id)
            state.watchListMovies = movies
            saveItem({ key: "watchListMovies", value: movies })
        }
    }
})

//проговорити, як працює Searchline
//проговорити, як працює MovieButtons and WatchListPage
//проговорити, як працює dataKey 




// Action creators are generated for each case reducer function
export const { setPopularMovies, setSearchedMovies, clearSearchMovies, addMovieToWatchList, removeMovieWatchList } = movieSlice.actions

export default movieSlice.reducer