import React from "react";
import Search from "../users/Search";
import Clear from "../layout/Clear";
import Users from "../users/Users";

const Home = () => {
  return (
    <div className='container'>
      <Search />
      <Clear />
      <Users />
    </div>
  );
};

export default Home;
