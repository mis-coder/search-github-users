import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alert = useContext(alertContext);
  const [input, setInput] = useState("");

  const changeHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      alert.setAlert("Please enter something!");
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

export default Search;
