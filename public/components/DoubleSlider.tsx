import React from "react"
import ReactDOM from "react-dom"

export default function DoubleSlider() {
    return (
        <div className="doubleSlider-container">
          <input
            type="range"
            min="0"
            max="1000"
            className="thumb thumb--zindex-3"
          />
          <input
            type="range"
            min="0"
            max="1000"
            className="thumb thumb--zindex-4"
          />
        </div>
      );
};