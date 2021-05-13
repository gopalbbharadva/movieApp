import { useEffect, useState } from "react";
import "./App.css";
import { SketchPicker } from "react-color";
import Movie from "./Components/Movie";

const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  let [color, setColor] = useState("");
  const [flag, flagHandler] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getMoviesData(movie_api);
  }, []);

  const getMoviesData = async (api) => {
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    getMoviesData(search_api + searchQuery);
    setSearchQuery("");
  };

  const searchInputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const colorHandler = (clr) => {
    color = clr.hex;
    console.log(color)
    if (color) setColor(color);
  };

  const btnHandler = () => {
    if (color) flagHandler(true);
    else flagHandler(false);
  };

  return (
    <div>
      {!flag ? (
        <div>
          <SketchPicker color={color} onChangeComplete={colorHandler} />
          <button onClick={btnHandler}>Submit</button>
        </div>
      ) : (
        <div>
          <header style={{backgroundColor:`${color}`}}>
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
          <div className="movie-container" style={{backgroundColor:`${color}`}}>
            {movies.map((item) => {
              return <Movie key={item.id} {...item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
