import React, { useState } from "react";
import { tempMovieData } from "../data/movieData";
import ListElement from "./ListElement";

function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListElement list={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
