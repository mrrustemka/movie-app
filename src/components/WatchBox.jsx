import React, { useState } from "react";
import Summary from "./Summary";
import WatchList from "./WatchList";

function WatchBox() {
  const [isOpen, setIsOpen] = useState(true);

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
          <Summary />
          <WatchList />
        </>
      )}
    </div>
  );
}

export default WatchBox;
