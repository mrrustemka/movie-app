import React from "react";
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

function Main({movies}) {
  return (
    <main className="main">
      <ListBox movies={movies}/>
      <WatchBox />
    </main>
  );
}

export default Main;
