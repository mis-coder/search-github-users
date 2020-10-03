import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Clear from "./components/layout/Clear";
import Alert from "./components/layout/Alert";
import About from "./pages/About";
import User from "./components/users/User";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alertMsg: "",
    user: {},
  };

  //search github users
  searchUsers = async (searchItem) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchItem}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  //get a single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, user: res.data });
  };
  //clear users from the state
  clearUsers = () => this.setState({ users: [], loading: false });

  // set an alert if there is literally nothing to be searched

  setAlert = (message) => {
    this.setState({ alertMsg: message });
    setTimeout(() => {
      this.setState({ alertMsg: "" });
    }, 3000);
  };
  render() {
    return (
      <Router>
        <Navbar />
        <Alert alert={this.state.alertMsg} />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Fragment>
                <Search
                  searchUsers={this.searchUsers}
                  setAlert={this.setAlert}
                />
                {this.state.users.length ? (
                  <Clear clearUsers={this.clearUsers} />
                ) : (
                  ""
                )}
                <Users loading={this.state.loading} users={this.state.users} />
              </Fragment>
            )}
          />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
