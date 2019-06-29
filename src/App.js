import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Logo() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function Instructions() {
  return <p>React testing</p>;
}

function LinkedInLink() {
  return (
    <a
      className="LinkedIn"
      href="https://www.linkedin.com/in/paulina-ani%C5%9Bkiewicz-4b7247179/"
      target="_blank"
      rel="noopener noreferrer"
    >
      My LinkedIn
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Instructions />
        <LinkedInLink />
      </header>
    </div>
  );
}

export default App;
