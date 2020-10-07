import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Clear from "./components/layout/Clear";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  //get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };
  //get a single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };
  //clear users from the state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

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
                {users.length ? <Clear clearUsers={clearUsers} /> : ""}
                <Users />
              </Fragment>
            )}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={(props) => (
              <User
                {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                repos={repos}
                user={user}
                loading={loading}
              />
            )}
          />
        </Switch>
      </Router>
    </GithubState>
  );
};

export default App;
