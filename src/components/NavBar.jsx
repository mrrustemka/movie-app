import { React } from "react";
import { useState } from "react";
import { tempMovieData } from "../data/movieData";
import Search from "./Search";

export default function NavBar() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <Search />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </>
  );
}
