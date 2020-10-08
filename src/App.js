import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Clear from "./components/layout/Clear";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [alertMsg, setAlertMsg] = useState("");

  // set an alert if there is literally nothing to be searched

  const setAlert = (message) => {
    setAlertMsg(message);
    setTimeout(() => {
      setAlertMsg("");
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <Navbar />
        <Alert alert={alertMsg} />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Fragment>
                <Search setAlert={setAlert} />
                <Clear />
                <Users />
              </Fragment>
            )}
          />
          <Route exact path='/user/:login' component={User} />
        </Switch>
      </Router>
    </GithubState>
  );
};

export default App;
