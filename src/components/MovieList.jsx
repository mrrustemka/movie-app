import React, { useState } from "react";
import { tempMovieData } from "../data/movieData";
import ListElement from "./ListElement";

function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListElement data={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
