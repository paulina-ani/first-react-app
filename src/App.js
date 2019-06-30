import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Instructions from "./components/Instructions/Instructions";
import Link from "./components/Link/Link";

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
