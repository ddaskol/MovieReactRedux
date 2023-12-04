import React, { useEffect, useRef } from "react";

import "./Slider.css"
import { register } from 'swiper/element/bundle'
import MovieCard from "../MovieCard/MovieCard";
register()


const Slider = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
        });
    }, []);
    return (
        <>
            <div className="slider">
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    speed="500" loop="true"
                    // css-mode="true"
                    navigation="true"
                // scrollbar="true"
                >
                    <swiper-slide><MovieCard
                        type="cardToSlider"
                    /></swiper-slide>
                    <swiper-slide><MovieCard
                        type="cardToSlider"
                    /></swiper-slide>
                    <swiper-slide><MovieCard
                        type="cardToSlider"
                    /></swiper-slide>
                    <div class="swiper-button-prev"></div>
                </swiper-container>
            </div>
        </>

    )
}




export default Slider