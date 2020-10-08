import React, { useContext } from "react";
import alertContext from "../../context/alert/alertContext";
const Alert = () => {
  const alert = useContext(alertContext);
  return (
    alert.alertMsg !== null && (
      <div className='alert-box'>
        <i className='fas fa-info-circle'></i>
        {alert.alertMsg}
      </div>
    )
  );
};

export default Alert;
