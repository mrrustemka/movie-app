import { React } from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";
import Search from "./Search";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <SearchResult />
      </nav>
    </>
  );
}
