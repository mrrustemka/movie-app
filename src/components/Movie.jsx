import React from "react";

function Movie({ list, onSelectMovie }) {
  return (
    <li key={list.imdbID} onClick={() => onSelectMovie(list.imdbID)}>
      <img src={list.Poster} alt={`${list.Title} poster`} />
      <h3>{list.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{list.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
