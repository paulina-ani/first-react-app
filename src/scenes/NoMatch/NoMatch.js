import React from "react";
import styles from "./NoMatch.module.css";

function NoMatch(params) {
  return (
    <div className={styles.container}>
      <h1 className={styles.bigTitle}>404</h1>
      <a className={styles.link} href="/">
        Go back home
      </a>
    </div>
  );
}

export default NoMatch;
