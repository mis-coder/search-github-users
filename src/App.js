import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import PageNotFound from "./components/pages/PageNotFound";
import Home from "./components/pages/Home";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:login' component={User} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
