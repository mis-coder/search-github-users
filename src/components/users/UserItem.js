import React from "react";

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
      <a href={html_url} className='more-btn'>
        More
      </a>
    </div>
  );
};

export default UserItem;
