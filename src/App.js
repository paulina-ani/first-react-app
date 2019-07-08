import React from "react";
import "./App.css";
import { LandingPage, AboutMe, NoMatch } from "./scenes";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
