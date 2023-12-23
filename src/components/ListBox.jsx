import React, { useState } from "react";
import MovieList from "./MovieList";

function ListBox({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default ListBox;
