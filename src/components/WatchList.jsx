import React, { useState } from "react";
import { tempWatchedData } from "../data/watchedData";
import WatchElement from "./WatchElement";

function WatchList() {
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchElement list={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchList;
