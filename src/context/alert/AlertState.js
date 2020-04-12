import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { REMOVE_ALERT, SET_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: false,
    type: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Remove Alert
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT, payload: { msg: '' } });
  };

  const setAlert = (alert) => {
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => removeAlert(), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        type: state.type,
        msg: state.msg,
        removeAlert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
