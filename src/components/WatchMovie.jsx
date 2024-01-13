import React from "react";

function WatchMovie({ list }) {
  return (
    <li key={list.imdbID}>
      <img src={list.Poster} alt={`${list.Title} poster`} />
      <h3>{list.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{list.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{list.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{list.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

export default WatchMovie;
