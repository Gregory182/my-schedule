import React, { useEffect } from 'react';
import DutyList from '../components/scheduleCreator/DutyList';
import EmployeeList from '../components/scheduleCreator/EmployeeList';
import { useState } from 'react';
import { firestore } from '../services/firebase';

import { monthDays } from '../services/calendarUtils'

const ScheduleCreation = () => {
  const [days, setDays] = useState([]);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const us = [];
  //     const data = await firestore.collection('users').get();
  //     data.docs.forEach( doc =>{
  //       console.log(doc.data())
  //     })
  //   };

  //   getUsers();
  // }, [users]);

  // useEffect(() => {
  //   const getUsers = async () => {

  //     const data = await firestore
  //     .collection('schedule')
  //     .doc('duties')
  //     // .where('Month','==', 'July')
  //     .get();
  //     data.docs.forEach( doc =>{
  //       console.log(doc.data())
  //     })
  //   };

  //   getUsers();
  // }, [users]);

  useEffect(() => {
    const arr = monthDays('2020-07-01').thisMonth;
    console.log(arr)
    setDays(arr);
  }, []);
  



  return (
    <div>
      <DutyList days={days} />
      <EmployeeList></EmployeeList>
    </div>
  );
};

export default ScheduleCreation;
