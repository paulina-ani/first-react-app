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
        <Button title={"Hello"} />
        <Button> Hi! </Button>
      </header>
    </div>
  );
}

export default App;
