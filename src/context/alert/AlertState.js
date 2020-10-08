import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // set an alert
  const setAlert = (message) => {
    dispatch({
      type: SET_ALERT,
      payload: message,
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };
  return (
    <alertContext.Provider
      value={{
        alertMsg: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
