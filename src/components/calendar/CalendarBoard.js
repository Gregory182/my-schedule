import React from 'react';
import styled from 'styled-components';

const CalendarForm = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  background-color: #ECEFF1;
  justify-items: stretch;
  align-content: space-between;
  grid-gap: 3px;

  .day-name{
    color:#fff;
    background-color:#555;
    text-align:center;
    padding:3px;

  }
`;

const CalendarBoard = ({children}) => {
  return (
    <CalendarForm>
     {children}
    </CalendarForm>
  );
};

export default CalendarBoard;