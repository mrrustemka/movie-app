import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import Logo from "./components/Logo";
// import { tempMovieData } from "./data/movieData";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
// import { tempWatchedData } from "./data/watchedData";
import Summary from "./components/Summary";
import WatchList from "./components/WatchList";
import Loader from "./components/Loader";

const KEY = "68d1440d";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let query = "interstellar";

  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <SearchResult movies={movies} />
      </NavBar>
      <Main>
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>
        <Box>
          <Summary watched={watched} />
          <WatchList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
