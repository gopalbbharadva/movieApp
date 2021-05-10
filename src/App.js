import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Components/Movie";

const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

  const [movies,setMovies]=useState([]);

  useEffect(async ()=>{
      await fetch(movie_api)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      });
  },[])

  return (
    <div className="movie-container">
      {movies.map((item) => {
        return <Movie key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;
