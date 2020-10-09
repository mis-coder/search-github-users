import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <p>Page Not Found :{"("}</p>
      <Link className='btn' to='/'>
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
