import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../../../api/fetchApiMovies";
import { clearSearchMovies, setSearchedMovies } from "../../../slices/movies";
import SearchList from "./SearchList";

import "./SearchLine.css"
import { useOutsideClick } from "../../../helpers/hooks/useOutsideClick";

const SearchLine = () => {
    const [query, setQuery] = useState('')
    const [showFullSearch, setShowFullSearch] = useState(false)

    const searchHandler = (e) => {
        setQuery(e.target.value)
    }
    const clearQuery = () => {
        setQuery('')
    }

    const dispatch = useDispatch()
    useEffect(() => {
        if (query) {
            searchMovies(query)
                .then(data => {
                    dispatch(setSearchedMovies(data))
                })
        } else {
            dispatch(clearSearchMovies())
        }
    }, [query])

    const toggleFullSearch = () => {
        setShowFullSearch(prevState => !prevState)
    }

    const searchLineRef = useRef()

    useOutsideClick(searchLineRef, () => {
        console.log('bbbb')
        setShowFullSearch(false)
    })


    console.log(showFullSearch)
    return (
        <div className={`searchContainer animate__animated ${showFullSearch ? 'openContainer ' : 'closeContainer'}`} ref={searchLineRef}>
            {!showFullSearch && (
                <button className="searchButton miniSearch" onClick={toggleFullSearch} >
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </button>
            )}
            {showFullSearch && (
                <>

                    <input
                        type="text"
                        placeholder="Search"
                        className="searchLine"
                        value={query}
                        onChange={searchHandler}
                    />
                    <button className="searchButton " onClick={toggleFullSearch}>
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>

                    <SearchList
                        clearQuery={clearQuery}
                        query={query}
                    />
                </>
            )}

        </div>
    )
}

export default SearchLine