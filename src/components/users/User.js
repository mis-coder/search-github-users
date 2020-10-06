import React, { useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

const User = ({ user, getUser, getUserRepos, match, loading, repos }) => {
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
User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
