import React, { Fragment } from "react";
import Search from "../users/Search";
import Clear from "../layout/Clear";
import Users from "../users/Users";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Clear />
      <Users />
    </Fragment>
  );
};

export default Home;
