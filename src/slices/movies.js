import { createSelector, createSlice } from '@reduxjs/toolkit'
import { rangeYears } from '../helpers/general'
import { getItem, saveItem } from '../helpers/watchlist'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        searchedMovies: [],
        watchListMovies: [],
        watchListMoviesIds: getItem({ key: "watchListMoviesIds" }) || [],
        countriesForFilters: [],
        genresForFilters: [],
        yearsForFilters: rangeYears(1960, 2024, true) || [],
        activeFilters: { year: '', country: '', genre: '' },

    },

    reducers: {
        setPopularMovies(state, action) {
            state.popularMovies = action.payload
            console.log(state, action)
        },
        setSearchedMovies(state, action) {
            state.searchedMovies = action.payload
        },
        clearSearchMovies(state, action) {
            state.searchedMovies = []
        },
        addMovieToWatchList(state, action) {
            const id = action.payload
            const moviesIds = [id, ...state.watchListMoviesIds]

            state.watchListMoviesIds = moviesIds
            saveItem({ key: "watchListMoviesIds", value: moviesIds })
        },
        removeMovieWatchList(state, action) {
            const id = action.payload
            const moviesIds = state.watchListMoviesIds.filter(movieId => movieId !== id)
            state.watchListMoviesIds = moviesIds
            saveItem({ key: "watchListMoviesIds", value: moviesIds })
        },
        setWatchListMovies(state, action) {
            state.watchListMovies = action.payload
        },
        setCountriesForFilters(state, action) {
            state.countriesForFilters = action.payload
        },
        setGenresForFilters(state, action) {
            state.genresForFilters = action.payload
        },
        setActiveFilters(state, action) {
            const { filter, value } = action.payload
            state.activeFilters[filter] = value
        },
        clearActiveFilters(state, action) {
            const { filter, value } = action.payload
            delete state.activeFilters[filter];
        }


    }
})

//проговорити, як працює Searchline
//проговорити, як працює MovieButtons and WatchListPage
//проговорити, як працює dataKey 




// Action creators are generated for each case reducer function
export const { setPopularMovies, setSearchedMovies, clearSearchMovies, addMovieToWatchList, removeMovieWatchList, setWatchListMovies, setCountriesForFilters, setGenresForFilters, setActiveFilters, clearActiveFilters } = movieSlice.actions

export default movieSlice.reducer