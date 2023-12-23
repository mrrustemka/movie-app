import React, { useState } from "react";
import MovieList from "./MovieList";

function ListBox({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
}

export default ListBox;
