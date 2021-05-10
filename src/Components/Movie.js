import React, { Component } from 'react';


const imagepath = "https://image.tmdb.org/t/p/w1280";

const Movie=({title,overview,poster_path,vote_average})=>{

    const setClassColor=(vote)=>{
        if(vote > 7)
            return 'green';
        else if(vote >7 && vote <4.5)
            return 'orange';
        else 
            return 'red';
    }
    return(
        <div className="movie">
            <img src={poster_path?(imagepath+poster_path):'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setClassColor(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;

