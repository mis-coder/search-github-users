import React from "react";
import PropTypes from "prop-types";

const Clear = ({ clearUsers }) => {
  return (
    <div className='clear'>
      <button className='clear-btn' onClick={clearUsers}>
        Clear All
      </button>
    </div>
  );
};

Clear.propType = {
  clearUsers: PropTypes.func.isRequired,
};

export default Clear;
