import React from "react";

function WatchElement({ data }) {
  return (
    <li key={data.imdbID}>
      <img src={data.Poster} alt={`${data.Title} poster`} />
      <h3>{data.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{data.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{data.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{data.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

export default WatchElement;
