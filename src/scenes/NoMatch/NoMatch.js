import React from "react";
import { container, bigTitle, link } from "./NoMatch.module.css";

function NoMatch(params) {
  return (
    <div className={container}>
      <h1 className={bigTitle}>404</h1>
      <a className={link} href="/">
        Go back home
      </a>
    </div>
  );
}

export default NoMatch;
