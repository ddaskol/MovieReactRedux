import { configureStore } from '@reduxjs/toolkit'
import baseReducer from "../slices/base"

export default configureStore({
    reducer: {
        base: baseReducer

    }
})