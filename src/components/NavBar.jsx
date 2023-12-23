import { React } from "react";
import SearchResult from "./SearchResult";
import Search from "./Search";
import Logo from "./Logo";

export default function NavBar({movies}) {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <SearchResult movies={movies}/>
      </nav>
    </>
  );
}
