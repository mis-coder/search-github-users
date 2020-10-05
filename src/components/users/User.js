import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
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
    } = this.props.user;
    const { loading } = this.props;

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
          <Repos repos={this.props.repos} />
        </Fragment>
      );
    }
  }
}

export default User;