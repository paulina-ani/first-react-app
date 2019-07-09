import React from "react";
import "./App.css";
import { LandingPage, AboutMe, NoMatch, TodoApp } from "./scenes";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { NavBar } from "./components";

function App(props) {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/landing-page" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/todoapp" component={TodoApp} />
        <Redirect exact from="/" to="landing-page" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
