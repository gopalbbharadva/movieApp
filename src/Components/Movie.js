import React, { Component } from 'react';


const imagepath = "https://image.tmdb.org/t/p/w1280";

const Movie=({title,overview,poster_path,vote_average})=>{
    return(
        <div className="movie">
            <img src={imagepath+poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <small>{vote_average}</small>
            </div>
        </div>
    )
}

export default Movie;

