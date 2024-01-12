import React from "react";
import ListElement from "./ListElement";

function MovieList({ movies, handleSelectMovie }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListElement list={movie} key={movie.imdbID} onSelectedMovie={handleSelectMovie}/>
      ))}
    </ul>
  );
}

export default MovieList;
