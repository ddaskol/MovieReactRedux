import React from "react";
import './Filters.css'

const Filters = () => {
    return (
        <div className="filters">
            <div className="filters_filter">
                <button className="filter_item">Ganre</button>
                <div className="filter_item_content">
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
            </div>
            <div className="filters_filter">
                <button className="filter_item">Year</button>
                <div className="filter_item_content">
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
            </div>
            <div className="filters_filter">
                <button className="filter_item">Country</button>
                <div className="filter_item_content">
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
            </div>
            <div className="filters_filter">
                <button className="filter_item">Ganre</button>
                <div className="filter_item_content">
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
            </div>
        </div>
    )
}

export default Filters