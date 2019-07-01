import React from "react";
import "./Button.module.css";

function Button({ children, title }) {
  const content = children || title;
  return <button>{content}</button>;
}

export default Button;
