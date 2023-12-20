import React, { useEffect, useRef } from "react";
import "./Slider.css"

import MovieCard from "../MovieCard/MovieCard";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from "react-redux";





const Slider = ({
    type = 'toHomePage'
}) => {

    const movies = useSelector((state) => state.movies.popularMovies)
    // const movies = useSelector((state) => state.movies.popularMovies)



    return (
        <>
            <div className={`slider ${type}`}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    navigation
                    spaceBetween={0}
                    slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        movies?.map((movie) => (
                            <SwiperSlide
                                key={movie.id}>
                                <MovieCard
                                    type="cardToSlider"
                                >
                                    <MovieCard.Image
                                        size="big"
                                    >{movie.poster_path}</MovieCard.Image>
                                    <MovieCard.Info>
                                        <MovieCard.Title to={movie.id}>{movie.title}</MovieCard.Title>
                                    </MovieCard.Info>
                                    <MovieCard.Buttons
                                        id={movie.id}
                                    />
                                </MovieCard>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </>

    )
}

// type="cardToSlider"


export default Slider