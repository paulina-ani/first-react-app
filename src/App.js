import React from "react";
import "./App.css";
import { Logo, Instructions, Link } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Instructions />
        <Link />
      </header>
    </div>
  );
}

export default App;
