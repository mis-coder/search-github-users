import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
const Clear = () => {
  const githubContext = useContext(GithubContext);
  const { users, clearUsers } = githubContext;

  return (
    users.length > 0 && (
      <div className='clear'>
        <button className='clear-btn' onClick={clearUsers}>
          Clear All
        </button>
      </div>
    )
  );
};

export default Clear;
