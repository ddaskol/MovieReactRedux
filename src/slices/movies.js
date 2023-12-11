import { createSelector, createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: []
    },
    reducers: {
        setPopularMovies(state, action) {
            state.popularMovies = action.payload
            // console.log(action)
        }

    }
})





// Action creators are generated for each case reducer function
export const { setPopularMovies } = movieSlice.actions

export default movieSlice.reducer