/* eslint-disable */
import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props: any) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // SET ALERT
  const setAlert = (msg: any) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg },
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 1500);
  };
  return (
    <AlertContext.Provider
      value<any>={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
