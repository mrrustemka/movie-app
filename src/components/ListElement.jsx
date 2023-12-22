import React from "react";

function ListElement({ data }) {
  return (
    <li key={data.imdbID}>
      <img src={data.Poster} alt={`${data.Title} poster`} />
      <h3>{data.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{data.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default ListElement;
