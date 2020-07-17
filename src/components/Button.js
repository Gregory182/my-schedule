import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #046EE5;
  color: #fff;
  border:none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size:16px;
  width:100%;
  cursor:pointer;
  
`;


const Button = ({ children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>  
      {children}
    </StyledButton>
  );
};







export default Button;