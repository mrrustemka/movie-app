import React, { useState } from "react";
import { tempMovieData } from "../data/movieData";

function SearchResult() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default SearchResult;
