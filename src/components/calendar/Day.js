import React from 'react';
import styled from 'styled-components';
//53px szerokości
const DayDiv = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  & .day-number {
    padding-top: 6px;
  }

  & .bar {
    width: 100%;
    margin: 3px 2px;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 3px;
  }

  .Dyżur {
    background-color: lightgreen;
  }
  .Wolne {
    background-color: salmon;
  }

  .day-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: #555;
    color: #fff;
  }
  /* /* #ECEFF1 */
`;

const Day = ({ showModal, dayNumber, requestType }) => {
  return (
    <DayDiv onClick={showModal}>
      <div className="day-number">{dayNumber}</div>
      <div className={`bar ${requestType}`}>{requestType}</div>
    </DayDiv>
  );
};

export default Day;
