import React from "react";
import "./App.css";
import { Logo, Instructions, Link, Button, H1 } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>This is my first react-app</H1>
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
