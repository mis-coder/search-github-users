import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [input, setInput] = useState("");

  const changeHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      setAlert("Please enter something!");
    } else {
      githubContext.searchUsers(input);
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
  setAlert: PropTypes.func.isRequired,
};
export default Search;
