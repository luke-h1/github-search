import React, { useContext } from 'react';
import styled from 'styled-components';
import AlertContext from '../../context/Alert/alertContext';

const AlertDiv = styled.div`
    h3{ 
        font-size: 17px;
    }
`;

const Alert: React.FC | any = () => {
  const alertcontext = useContext(AlertContext);
  const { alert } = alertcontext;

  return (
    alert !== null && (
    <AlertDiv>
      <h3>{alert.msg}</h3>
    </AlertDiv>
    )
  );
};
export default Alert;
