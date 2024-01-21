import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToWatchList, removeMovieWatchList } from "../../../../slices/movies";
import "./MovieCardButtons.css";

export const MovieCardButtons = ({
    type = "inMovieCard",
    id
}) => {
    const [animated, setAnimated] = useState(false);

    const dispatch = useDispatch();
    const isSelectedId = useSelector(state => state.movies.watchListMoviesIds.includes(id));
    const clickHandler = () => {
        const action = isSelectedId ? removeMovieWatchList : addMovieToWatchList;
        dispatch(action(id));
        setAnimated(true);
    };

    useEffect(() => {
        //за допомогою гпт розібрався, як змінювати стан при кліку(підвʼязка анімації)
        const timeoutSetAnimated = setTimeout(() => setAnimated(false), 850);

        return () => clearTimeout(timeoutSetAnimated);
    }, [animated]);

    return (
        <div className={`movieCardButtons buttonPlus `} onClick={clickHandler}>
            <p className={`movieCardButtons_icon ${isSelectedId ? 'rotated' : ''}`}>
                <span className={`material-symbols-outlined ${isSelectedId ? 'rotated iconMinusCorrect' : 'iconPlusCorrect'}`}>
                    {isSelectedId ? 'remove' : 'add'}
                </span>
            </p>
            <p className={`movieCardButtons_text ${animated ? 'animate__animated animate__fadeInLeft' : ''}`}>
                {!isSelectedId ? 'Add to' : 'Remove from'} watchlist
            </p>
            <div className="movieCardButtons_darken"></div>
        </div>
    );
};
