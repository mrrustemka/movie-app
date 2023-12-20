import { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Button from "./components/Button";
import { tempMovieData } from "./data/movieData";
import { tempWatchedData } from "./data/watchedData";

export default function App() {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <Header />
      <main className="main">
        <div className="box">
          <Button state={isOpen1} data={movies} />
        </div>
        <div className="box">
          <Button state={isOpen2} data={watched}/>
          {/* {isOpen2 && (
            <>
              <Summary />
              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )} */}
        </div>
      </main>
    </>
  );
}
