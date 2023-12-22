import React, { useState } from "react";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { tempWatchedData } from "../data/watchedData";

function WatchBox() {
  const [isOpen, setIsOpen] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <Summary watched={watched} />
          <WatchList />
        </>
      )}
    </div>
  );
}

export default WatchBox;
