import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card'>
      <img
        src={avatar_url}
        alt={login}
        style={{
          borderRadius: "100%",
          height: "8rem",
          width: "8rem",
          margin: "1rem auto",
        }}
      />
      <p className='user-login'>{login}</p>
      <Link to={`/user/${login}`} className='more-btn'>
        More
      </Link>
    </div>
  );
};

export default UserItem;
