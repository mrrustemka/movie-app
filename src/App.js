import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Summary from "./components/Summary";
import WatchList from "./components/WatchList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SelectedMovie from "./components/MovieDetail";
import MovieDetail from "./components/MovieDetail";

const KEY = "68d1440d";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId(id);
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching data...");
          }
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <SearchResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetail selectedId={selectedId} />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
