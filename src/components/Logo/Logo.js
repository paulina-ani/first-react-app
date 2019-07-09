import React from "react";
import logo from "./logo.svg";

function Logo(props) {
  return <img src={logo} className="App-logo" alt="logo" {...props} />;
}

export default Logo;
