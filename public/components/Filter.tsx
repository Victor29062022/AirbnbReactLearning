import React from "react";
import  ReactDOM  from "react-dom";
import DoubleSlider from "./DoubleSlider";
import SearchForm from "./SearcForm";

export default function Filter(){
    return(
        <div className="filter">Filter activities
        <select className="availability-selector">
            <option>All activities</option>
            <option>Available activities</option>
            <option>Sports</option>
            <option>Music</option>
            <option>Relaxing</option>
        </select>
            <span className="price-range">Price range : </span>
            <DoubleSlider />
        <SearchForm />
        </div>
    )
}