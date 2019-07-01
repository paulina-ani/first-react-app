import React from "react";
import "./App.css";
import { Logo, Instructions, Link, Button } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Instructions />
        <Link />
        <Button />
      </header>
    </div>
  );
}

export default App;
