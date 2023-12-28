import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import Logo from "./components/Logo";
import { tempMovieData } from "./data/movieData";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import { tempWatchedData } from "./data/watchedData";
import Summary from "./components/Summary";
import WatchList from "./components/WatchList";
import ExpandText from "./components/ExpandText";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <SearchResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
          <ExpandText />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
