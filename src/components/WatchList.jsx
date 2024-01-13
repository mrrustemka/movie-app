import React from "react";
import WatchMovie from "./WatchMovie";

function WatchList({ watched }) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchMovie list={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchList;
