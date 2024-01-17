import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

function MovieDetails({
  movie,
  onCloseMovie,
  isLoading,
  onAddWatched,
  watched,
  selectedId,
}) {
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(movie.imdbID);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      imdbRating: Number(movie.imdbRating),
      Runtime: movie.Runtime.split(" ").at(0),
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      if (!movie.Title) return;
      document.title = `Movies | ${movie.Title}`;

      return function () {
        document.title = "Movies";
      };
    },
    [movie.Title]
  );

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={() => onCloseMovie()}>
              &larr;
            </button>
            <img
              src={movie.Poster}
              alt={`The poster of ${movie.Title} movie`}
            />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>

              <p>
                <span>⭐️</span>
                {movie.imdbRating} IMDb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You Rated the Movie {watchedUserRating}
                  <span>🌟</span>
                </p>
              )}
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
