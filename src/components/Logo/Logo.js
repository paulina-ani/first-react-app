import React from "react";
import logo from "./logo.svg";

function Logo(props) {
  return <img src={logo} className="App-logo" {...props} alt="logo" />;
}

export default Logo;
