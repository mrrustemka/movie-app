import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "../src/components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
  </>
);
