import React from 'react';

import styled from 'styled-components';

const DayWrapper = styled.div`
  display:flex;
  flex-direction:row;


  background-color:#ddd;
  .d1{
    margin:5px 10px;
    padding: 6px 10px;
    background-color: orange;
    width: 90px;
    height:100%;
    text-align: center;
  }
`

const DutyDay = ({ day, draggable }) => {


  const dragStart = (e) =>{
    e.preventDefault();
    const target = e.target;
    target.classList.add('dragging')
    


  }

  const dragover = e => {
    e.stopPropagation();
    
    
  }

  return (
    <DayWrapper>
      <div>{day}</div>
      <div 
      className="d1"
      onDragStart={dragStart}
      onDragOver={dragover}
      draggable
      
      > Dyżur1 </div>
      <div className="d1"> Dyżur </div>
      <div className="d1"> Dyżur </div>
      <div className="d1"> Dyżur </div>
    </DayWrapper>
  );
};

export default DutyDay;
