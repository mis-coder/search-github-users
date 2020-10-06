import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      setAlert("Please enter something!");
    } else {
      searchUsers(input);
      setInput("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className='form'>
        <input
          type='text'
          name='text'
          placeholder='search users...'
          className='search-bar'
          value={input}
          onChange={changeHandler}
        />
        <input type='submit' value='Search' className='search-btn' />
      </form>
    </>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
