import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { tempMovieData } from "./data/movieData";
import { tempWatchedData } from "./data/watchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}
