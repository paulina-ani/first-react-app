import React from "react";
import "./App.css";
import { LandingPage, AboutMe, NoMatch } from "./scenes";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/landing-page" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Redirect exact from="/" to="landing-page" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
