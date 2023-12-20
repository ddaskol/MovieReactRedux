import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import App from "../App/App";

import HomePage from "../modules/HomePage/HomePage"
import SelectMoviePage from "../modules/SelectMoviePage/SelectMoviePage"
import WatchListPage from "../modules/WatchListPage/WatchListPage"
import ErrorPage from "../modules/ui/ErrorPage/ErrorPage";
import ActiveMovie from "../modules/ActiveMovie/ActiveMovie";
import { fetchMovie } from "../api/fetchApiMovies";


export async function movieLoader({ params }) {
    // fetchMovie(params.id)
    // const movies = await fetchMovies()

    //now, instead of going through the entire array with movies, we make a request to the API through the fetchMovie function, which outputs 1 movie by id
    const movie = await fetchMovie(params.id)

    // const movie = movies.find(({ id }) => id == params.id)
    return { movie }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Suspense fallback={<>Loading</>}><HomePage /> </Suspense>,
                index: true,
            },
            {
                path: "/discover",
                element: <Suspense fallback={<>Loading</>}><SelectMoviePage /> </Suspense>
            },
            {
                path: "/watchlist",
                element: <Suspense fallback={<>Loading</>}><WatchListPage /></Suspense>
            },
            {
                path: "/movie/:id",
                element: <Suspense fallback={<>Loading</>}><ActiveMovie /></Suspense>,
                loader: movieLoader,
            },
        ]
    }
])

export default router