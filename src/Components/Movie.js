import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const imagepath = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, overview, poster_path, vote_average }) => {
  const setClassColor = (vote) => {
    if (vote > 7) return "green";
    else if (vote > 7 && vote < 4.5) return "orange";
    else return "red";
  };

  let [toolTip, setTooltipHandler] = useState(false);

  const setTooltip = () => {
    if (toolTip) return "block";
    else return "none";
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? imagepath + poster_path
            : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setClassColor(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <label style={{ display: setTooltip(),color:"#34D399"}}>Add to Favourites</label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Overview</h3>
          <FontAwesomeIcon
            onMouseEnter={() => setTooltipHandler(true)}
            onMouseLeave={() => setTooltipHandler(false)}
            className="favoritesBtn"
            icon={faPlusCircle}
          ></FontAwesomeIcon>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
