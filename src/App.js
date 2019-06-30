import React from "react";
import "./App.css";
import Logo from "./Logo";
import Instructions from "./Instructions";
import Link from "./Link";

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
