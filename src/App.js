import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Clear from "./components/layout/Clear";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search />
                  <Clear />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path='/user/:login' component={User} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
