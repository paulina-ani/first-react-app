import React from "react";
import { LinkedIn as LinkedInClass } from "./Link.module.css";

function Link() {
  return (
    <a
      className={LinkedInClass}
      href="https://www.linkedin.com/in/paulina-ani%C5%9Bkiewicz-4b7247179/"
      target="_blank"
      rel="noopener noreferrer"
    >
      My LinkedIn
    </a>
  );
}
export default Link;
