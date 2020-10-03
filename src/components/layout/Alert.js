import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== "" && (
      <div className='alert-box'>
        <i className='fas fa-info-circle'></i>
        {alert}
      </div>
    )
  );
};

export default Alert;
