import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import App from "../App/App";

import HomePage from "../modules/HomePage/HomePage"
import SelectMoviePage from "../modules/SelectMoviePage/SelectMoviePage"
import WatchListPage from "../modules/WatchListPage/WatchListPage"
import ErrorPage from "../modules/ui/ErrorPage/ErrorPage";
import { fetchMovies } from "../api/fetchMovies";
import ActiveMovie from "../modules/ActiveMovie/ActiveMovie";


export async function movieLoader({ params }) {
    const movies = await fetchMovies()

    const movie = movies.find(({ id }) => id == params.id)
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