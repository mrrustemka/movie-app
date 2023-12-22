import { React } from "react";
import { useState } from "react";
import { tempMovieData } from "../data/movieData";
import Search from "./Search";
import Logo from "./Logo";

export default function NavBar() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </>
  );
}
