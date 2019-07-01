import React from "react";
import "./Button.module.css";

function Button(props) {
  const { title } = props;
  return <button>{title}</button>;
}

export default Button;
