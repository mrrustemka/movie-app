import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import Logo from "./components/Logo";
import { tempMovieData } from "./data/movieData";
import ListBox from "./components/ListBox";
import WatchBox from "./components/WatchBox";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <SearchResult movies={movies} />
      </NavBar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchBox />
      </Main>
    </>
  );
}
