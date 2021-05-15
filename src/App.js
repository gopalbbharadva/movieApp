import { useEffect, useState } from "react";
import "./App.css";
import { SketchPicker } from "react-color";
import Movie from "./Components/Movie";
import Favourite from "./Components/Favourite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  NavLink,
  Link,
} from "react-router-dom";

const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

toast.configure();

function App() {
  const [movies, setMovies] = useState([]);
  let [color, setColor] = useState("");
  const [flag, flagHandler] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [addFavourite, favouriteMovieHandler] = useState([]);

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
    console.log(color);
    if (color) setColor(color);
  };

  const btnHandler = () => {
    if (color) flagHandler(true);
    else flagHandler(false);
  };

  const favouriteMovie = (movie) => {
    const currentMovie = [...addFavourite, movie];
    favouriteMovieHandler(currentMovie);
    toast.success(`${movie.title} is added`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
    });
  };

  const deleteFavourite = (index) => {
    const tempMovies = addFavourite.slice();
    tempMovies.splice(index, 1);
    favouriteMovieHandler(tempMovies);
    toast.error(`${movies[index].title} is removed`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
    });
  };

  return (
    <Router>
      <Route exact path="/">
        <div>
          {!flag ? (
            <div
              style={{
                height: "80vh",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SketchPicker color={color} onChangeComplete={colorHandler} />
              <button onClick={btnHandler}>Submit</button>
            </div>
          ) : (
            <div>
              <header style={{ backgroundColor: `${color}` }}>
                <NavLink
                  // style={{ color: `${color} === "white"?'black':'white'` }}
                  exact
                  to="/fv"
                >
                  Favourites
                </NavLink>
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
              <div style={{ backgroundColor: `${color}` }}>
                {/* {movies.map((item) => {
              return <Movie key={item.id}  {...item} />;
            })} */}
                <Movie movies={movies} favouriteMovie={favouriteMovie} />
              </div>
            </div>
          )}
        </div>
      </Route>
      <Route>
        <div style={{ backgroundColor: `${color}` }}>
          {/* {movies.map((item) => {
              return <Movie key={item.id}  {...item} />;
            })} */}
          <Favourite movies={addFavourite} favouriteMovie={deleteFavourite} />
        </div>
      </Route>
    </Router>
  );
}

export default App;
