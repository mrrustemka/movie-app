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

const KEY = "68d1440d";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let tempQuery = "new york";

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${tempQuery}`
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
    fetchMovies();
  }, []);

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
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
