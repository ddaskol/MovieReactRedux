import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import App from "../App/App";

import HomePage from "../modules/HomePage/HomePage"
import SelectMoviePage from "../modules/SelectMoviePage/SelectMoviePage"
import WatchListPage from "../modules/WatchListPage/WatchListPage"
import ErrorPage from "../modules/ui/ErrorPage/ErrorPage";



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
        ]
    }
])

export default router