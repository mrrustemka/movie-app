import React from "react";

function ListElement({ list, handleSelectMovie }) {
  return (
    <li key={list.imdbID} onClick={handleSelectMovie}>
      <img src={list.Poster} alt={`${list.Title} poster`} />
      <h3>{list.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{list.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default ListElement;
