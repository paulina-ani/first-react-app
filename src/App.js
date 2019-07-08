import React from "react";
import "./App.css";
import LandingPage from "./scenes/LandingPage/LandingPage";
import AboutMe from "./scenes/AboutMe/AboutMe";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
