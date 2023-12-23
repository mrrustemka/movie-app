import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { tempMovieData } from "./data/movieData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
