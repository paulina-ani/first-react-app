import React from "react";
import { container, bigTitle, link } from "./NoMatch.module.css";
import { Link } from "react-router-dom";

function NoMatch(params) {
  return (
    <div className={container}>
      <h1 className={bigTitle}>404</h1>
      <Link className={link} to="/">
        Go back home
      </Link>
    </div>
  );
}

export default NoMatch;
