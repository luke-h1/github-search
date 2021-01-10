import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components';

const AlertDiv = styled.div`
    h3{ 
        font-size: 17px;
    }
`;

const Alert = () => {
  const alertcontext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
    <AlertDiv>
      <h3>{alert.msg}</h3>
    </AlertDiv>
    )
  );
};
export default Alert;
