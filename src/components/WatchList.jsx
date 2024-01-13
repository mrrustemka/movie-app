import React from "react";
import WatchMovie from "./WatchMovie";

function WatchList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchList;
