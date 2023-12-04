import React from "react";
import MovieList from "../ui/MovieList/MovieList";
import Slider from "../ui/Slider/Slider";

import "./HomePage.css"

const HomePage = () => {
    return (
        <>
            <div className="HomePage">
                <Slider />
                <div className="homePage_body">
                    <div className="homePage_title">
                        <h3>Popular on Host</h3>
                    </div>
                    <MovieList />
                </div>
            </div>



        </>
    )
}

export default HomePage