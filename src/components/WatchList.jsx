import React from "react";
import WatchElement from "./WatchElement";

function WatchList({ watched }) {
  console.log("a", watched[1]);
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchElement list={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchList;
