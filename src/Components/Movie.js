import React, { Component } from 'react';


const imagepath = "https://image.tmdb.org/t/p/w1280";

const Movie=({title,overview,poster_path,vote_average})=>{
    return(
        <div className="movie">
            <img src={imagepath+poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;

