import React from "react";

function H1({ children, title }) {
  const content = children || title;
  return <h1>{content}</h1>;
}

export default H1;
