import React, { useState } from "react";
import MovieList from "./MovieList";

function ListBox() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <MovieList />}
    </div>
  );
}

export default ListBox;
