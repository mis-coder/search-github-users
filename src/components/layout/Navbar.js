import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <Link style={homeLink} to='/'>
        Home
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Search Github Users",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const homeLink = {
  color: "white",
  fontSize: "1.2rem",
};
export default Navbar;
