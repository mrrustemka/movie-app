import React, { useState } from "react";
import { tempMovieData } from "../data/movieData";

function ListBox() {
  // const dataChange = useCallback(() => [data]);
  const [isOpen, setIsOpen] = useState(true);
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <ul className="list">
          {movies?.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListBox;
