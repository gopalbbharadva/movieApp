import { useState } from "react";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const imagepath = "https://image.tmdb.org/t/p/w1280";

const Favourite = (props) => {
  const setClassColor = (vote) => {
    if (vote > 7) return "green";
    else if (vote > 7 && vote < 4.5) return "orange";
    else return "red";
  };
  return (
    <div className="movie-container">
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="movie">
            <img
              src={
                movie.poster_path
                  ? imagepath + movie.poster_path
                  : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span className={`tag ${setClassColor(movie.vote_average)}`}>
                {movie.vote_average}
              </span>
            </div>
            <div className="movie-overview">
              {/* <label style={{ display: setTooltip(), color: "#34D399" }}>
              Add to Favourites
            </label> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>Overview</h3>
                <FontAwesomeIcon
                  onClick={() => props.favouriteMovie(index)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.6rem",
                    color: "red",
                  }}
                  //   className="favoritesBtn"
                  icon={faTrash}
                ></FontAwesomeIcon>
              </div>
              <p>{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
