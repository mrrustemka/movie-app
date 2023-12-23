import React from "react";
import ListElement from "./ListElement";

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListElement list={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
