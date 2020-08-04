import React from 'react';
import DutyDay from './DutyDay';

const DutyList = ({ days }) => {
  const listOfDays = days.map((day) => {
    
    return <DutyDay 
    day={day.date}
    draggable="true"
    ></DutyDay>;
  });


  return (
    <div>
      {listOfDays}
      {/* {mainDuty} */}
    </div>
  );
};

export default DutyList;
