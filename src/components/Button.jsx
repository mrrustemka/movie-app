import React, { useCallback } from "react";

function Button({ state, data }) {
  const dataChange = useCallback(() => [data]);
  return (
    <>
      <button
        className="btn-toggle"
        onClick={() => dataChange((open) => !open)}
      >
        {state ? "–" : "+"}
      </button>
      {state && (
        <ul className="list">
          {data?.map((movie) => (
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
    </>
  );
}

export default Button;
