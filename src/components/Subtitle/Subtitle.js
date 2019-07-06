import React from "react";
import "./Subtitle.module.css";

function Subtitle({ title, children }) {
  const content = children || title;
  return <h2>{content}</h2>;
}

export default Subtitle;
