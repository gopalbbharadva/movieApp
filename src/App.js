import { useEffect, useState } from "react";
import "./App.css";
import Color from "./Components/Colorpicker";
import Movie from "./Components/Movie";

const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getMoviesData(movie_api);
  }, []);

  const getMoviesData=async (api)=>{
    await fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }

  const formHandler = async (e) => {
    e.preventDefault();
    getMoviesData(search_api+searchQuery)
    setSearchQuery('');
  };

  const searchInputHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <Color/>
       {/* <header>
        <form onSubmit={formHandler}>
          <input
            onChange={searchInputHandler}
            type="text"
            className="search"
            value={searchQuery}
            placeholder="Search..."
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((item) => {
          return <Movie key={item.id} {...item} />;
        })}
      </div> */}
    </div>
  );
}

export default App;
