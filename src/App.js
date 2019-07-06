import React from "react";
import "./App.css";
import { Logo, Instructions, Link, Button, H1, Subtitle } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>This is my first react-app</H1>
        <Subtitle> Please visit my LinkedIn page</Subtitle>
        <Link />
        <Logo />
        <Instructions />
        <Button title={"Hello"} variant={"primary"} />
        <Button variant={"secondary"}> Hi! </Button>
      </header>
    </div>
  );
}

export default App;
