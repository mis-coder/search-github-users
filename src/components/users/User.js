import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/'>
          <i className='fa fa-arrow-circle-left'></i>
        </Link>
        <div className='user-info-grid'>
          <div className='user-info-card'>
            <img
              src={avatar_url}
              alt=''
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div className='user-info-card'>
            {bio && (
              <Fragment>
                <h1>Bio</h1>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url}>Visit Github Profile</a>
            <ul>
              {login && (
                <li>
                  <strong>Username: </strong>
                  {login}
                </li>
              )}
              {company && (
                <li>
                  <strong>Company: </strong>
                  {company}
                </li>
              )}

              {blog && (
                <li>
                  <strong>Website: </strong>
                  {blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='repo-info'>
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
          <div>Public Repos: {public_repos}</div>
          <div>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
