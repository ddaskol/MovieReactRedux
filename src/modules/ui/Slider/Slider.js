import React, { useEffect, useRef } from "react";

import "./Slider.css"
import { register } from 'swiper/element/bundle'
import MovieCard from "../MovieCard/MovieCard";
import { useLoaderData, useParams } from "react-router-dom";
import { useMovies } from "../MovieList/useMovies";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Slider = ({ }) => {
    const { movies } = useMovies({ index: 0 })
    // console.log(movies)

    // useEffect(() => {
    //     register()
    // }, [movies])
    // //slider
    // const swiperElRef = useRef(null);
    // useEffect(() => {


    //     // listen for Swiper events using addEventListener
    //     swiperElRef.current.addEventListener('swiperprogress', (e) => {
    //         const [swiper, progress] = e.detail;
    //     });
    // }, []);
    return (
        <>
            <div className="slider">


                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    navigation
                    spaceBetween={500}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        movies.map((movie) => (
                            <SwiperSlide>
                                <MovieCard
                                    key={movie.id}
                                    type="cardToSlider"
                                >
                                    <MovieCard.Image>{movie.image}</MovieCard.Image>
                                    <MovieCard.Info>
                                        <MovieCard.Title to={movie.id}>{movie.title}</MovieCard.Title>
                                        <MovieCard.Rating>{movie.vote_average}</MovieCard.Rating>
                                        <MovieCard.Genre>{movie.genre_ids}</MovieCard.Genre>
                                    </MovieCard.Info>
                                    <MovieCard.Buttons />
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