import React from "react";
import { title as titleClass } from "./H1.module.css";

function H1({ children, title }) {
  const content = children || title;
  return <h1 className={titleClass}>{content}</h1>;
}

export default H1;
