import React, { useState } from "react";

export default function Movie(props) {
    let baseUrl = 'https://image.tmdb.org/t/p/w500';
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="movie-container"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <img src={baseUrl + props.route} alt="Movie Poster" />
            {isHovered && <div className="mouse"></div>}
        </div>
    );
}
