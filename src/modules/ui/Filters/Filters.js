import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountriesForFilters, setGenresForFilters, setActiveFilters, clearActiveFilters } from "../../../slices/movies";
import './Filters.css'

import { getCountries, getGenres } from "../../../api/fetchApiMovies";
import { useOutsideClick } from '../../../helpers/hooks/useOutsideClick';

const Filters = () => {
    const [showFilters, setShowFilters] = useState({
        genres: false,
        years: false,
        countries: false,
    });
    const [searchFilters, setSearchFilters] = useState({
        genre: '',
        country: ''
    })

    // const [searchGenre, setSearchGenre] = useState('')
    // const [searchCountries, setSearchCountries] = useState('')

    const toggleFilters = (filter) => {
        setShowFilters(prevState => ({ ...prevState, [filter]: !prevState[filter] }));
    };
    const searchFilterHandler = (e) => {
        const { name, value } = e.target
        setSearchFilters(prevState => ({ ...prevState, [name]: value }))
    }




    const dispatch = useDispatch();
    useEffect(() => {
        getCountries().then(data => {
            dispatch(setCountriesForFilters(data));
        });
        getGenres().then(data => {
            dispatch(setGenresForFilters(data));
        });
    }, []);

    const onClickHandler = (filter, value) => {
        const isActiveFilter = activeFilters[filter] === value;

        if (isActiveFilter) {
            dispatch(clearActiveFilters({ filter, value }));
        } else {
            dispatch(setActiveFilters({
                filter,
                value
            }));
        }
    };
    const countries = useSelector(state => state.movies.countriesForFilters);
    const years = useSelector(state => state.movies.yearsForFilters);
    const genres = useSelector(state => state.movies.genresForFilters);

    const [activeCountryNativeName, setActiveCountryNativeName] = useState('')
    const [filteredCountries, setFilteredCountries] = useState()
    const [filteredGenres, setFilteredGenres] = useState()

    useEffect(() => {
        setFilteredCountries(countries.filter(c => c.native_name.toLowerCase().includes(searchFilters.country.toLowerCase())))
    }, [searchFilters.country, countries])

    useEffect(() => {
        setFilteredGenres(genres.filter(g => g.name.toLowerCase().includes(searchFilters.genre.toLowerCase())))
    }, [searchFilters.genre, genres])


    const activeFilters = useSelector(state => state.movies.activeFilters);

    useEffect(() => {
        setActiveCountryNativeName(countries.find(c => c.iso_3166_1 === activeFilters.country)?.native_name)
    }, [activeFilters.country])



    // const outsideClickHandler = (event) => {
    //     if (!event.target.closest('.filters_body_btn')) {
    // setShowFilters({
    //     genres: true,
    //     years: true,
    //     countries: true,
    // });
    //     }
    // }

    const [genreRef, yearRef, countryRef] = [useRef(), useRef(), useRef()]

    const closeOutsideClickHandler = (name) => {
        setShowFilters(prevState => ({ ...prevState, [name]: false }));
    }


    useOutsideClick(genreRef, () => closeOutsideClickHandler('genres'))
    useOutsideClick(yearRef, () => closeOutsideClickHandler('years'))
    useOutsideClick(countryRef, () => closeOutsideClickHandler('countries'))




    return (
        <>
            <div className={`filters`}>
                <div className="filters_body" ref={genreRef}>
                    <button
                        className={`filters_body_btn  ${!showFilters.genres ? '' : 'bRadius'} ${activeFilters.genre ? 'bColor' : ''}`}
                        onClick={() => toggleFilters('genres')}
                    >

                        <span className="material-symbols-outlined">{!showFilters.genres ? 'arrow_drop_down' : 'arrow_drop_up'}</span>
                        Genre{`${activeFilters.genre ? ':' : ''}`} {activeFilters.genre}
                    </button>
                    {showFilters.genres && (
                        <>
                            <input
                                name='genre'
                                type="text"
                                placeholder="Search"
                                className={`searchLine searchFiltersLine`}
                                value={searchFilters.genre}
                                onChange={searchFilterHandler}
                            />
                            <div className="filter_item">
                                {filteredGenres.map(g => (
                                    <FilterItem
                                        key={g.id}
                                        isActive={activeFilters.genre === g.name}
                                        onClick={() => onClickHandler('genre', g.name)}
                                    >
                                        {g.name}
                                    </FilterItem>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="filters_body" ref={yearRef}>
                    <button
                        className={`filters_body_btn  ${!showFilters.years ? '' : 'bRadius'} ${activeFilters.year ? 'bColor' : ''}`}
                        onClick={() => toggleFilters('years')}
                    >
                        <span className="material-symbols-outlined">{!showFilters.years ? 'arrow_drop_down' : 'arrow_drop_up'}</span>
                        Year{`${activeFilters.year ? ':' : ''}`} {activeFilters.year}
                    </button>
                    {showFilters.years && (
                        <div className="filter_item">
                            {years.map(y => (
                                <FilterItem
                                    key={y}
                                    isActive={activeFilters.year === y}
                                    onClick={() => onClickHandler('year', y)}
                                >
                                    {y}
                                </FilterItem>
                            ))}
                        </div>
                    )}
                </div>

                <div className="filters_body" ref={countryRef}>
                    <button
                        className={`filters_body_btn  ${!showFilters.countries ? '' : 'bRadius'} ${activeFilters.country ? 'bColor' : ''}`}
                        onClick={() => toggleFilters('countries')}
                    >

                        <span className="material-symbols-outlined">{!showFilters.countries ? 'arrow_drop_down' : 'arrow_drop_up'}</span>
                        Countries{`${activeFilters.country ? ':' : ''}`} {activeCountryNativeName}
                    </button>
                    {showFilters.countries && (
                        <>
                            <input
                                name='country'
                                type="text"
                                placeholder="Search"
                                className={`searchLine searchFiltersLine`}
                                value={searchFilters.country}
                                onChange={searchFilterHandler}
                            />
                            <div className="filter_item">
                                {filteredCountries.map(c => (
                                    <FilterItem
                                        key={c.id}
                                        isActive={activeFilters.country === c.iso_3166_1}
                                        onClick={() => onClickHandler('country', c.iso_3166_1)}
                                    >
                                        {c.native_name}
                                    </FilterItem>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

const FilterItem = ({ isActive, onClick, children }) => {
    return <div
        className={`${isActive ? 'active' : ''}`}
        onClick={onClick}
    // className={isActive}
    >
        {children}
    </div>
}

export default Filters;
