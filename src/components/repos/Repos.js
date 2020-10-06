import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
const Repos = ({ repos }) => {
  return (
    <>
      <h1 className='latest-repos-title'>Latest Repos</h1>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
      ;
    </>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
