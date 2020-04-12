import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {
  const alertContext = useContext(AlertContext);
  const { msg, alert, type, removeAlert, setAlert } = alertContext;
  return (
    alert && (
      <div className={`alert alert-${type}`}>
        <i className='fas fa-info-circle'></i> {msg}
      </div>
    )
  );
}
