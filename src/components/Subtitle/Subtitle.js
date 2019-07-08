import React from "react";
import { Subtitle as SubtitleClass } from "./Subtitle.module.css";

function Subtitle({ title, children }) {
  const content = children || title;
  return <h2 className={SubtitleClass}>{content}</h2>;
}

export default Subtitle;
