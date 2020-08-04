import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import CalendarBoard from './CalendarBoard';
import Day from './Day';
import Modal from '../Modal';

import Spinner from '../Spinner';
import { firestore } from '../../services/firebase';
import { AuthContext } from '../Auth';

import { weekDays, monthDays } from '../../services/calendarUtils';

const NavigationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #d15353;

  & span {
    font-size: 24px;
    color: #222;
  }
`;

const CalendarWrapper = styled.div`
  position: relative;
  border: 2px solid #888;
  border-radius: 5px;
  overflow: hidden;
  width: 100vw;
  box-shadow: -7px 3px 23px 0px rgba(0, 0, 0, 0.48);

  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.2rem;
  min-width: 120px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
`;

const Calendar = () => {
  const { testUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mom, setMom] = useState(moment().locale('pl'));
  const [myDays, setMyDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dateId, setDateId] = useState();
  const [myRequest, setMyRequest] = useState({
    user_id: '',
    date: '',
    requestType: '',
  });

  const calendarDays = monthDays(mom).fullData;

  useEffect(() => {
    if (testUser) getData();
  }, [testUser]);

  const getData = async () => {
    setIsLoading(true);
    const fetchedData = [];
    const data = await firestore
      .collection('requestedDates')
      .where('user_id', '==', testUser.id)
      .get();
    data.docs.forEach((doc) => {
      fetchedData.push(doc.data());
    });

    setMyDays(fetchedData);
    setIsLoading(false);
  };

  const getOneDay = async (day) => {
    const data = await firestore
      .collection('requestedDates')
      .where('date', '==', day)
      .where('user_id', '==', testUser.id)
      .get();

    let id = !!data.docs[0] ? data.docs[0].id : null;
    setDateId(id);
    return data.docs.length > 0 ? data.docs[0].data() : null;
  };

  const setMonth = (nexMonth) => {
    let newMom = moment().set('month', mom.month() + nexMonth);
    console.log(newMom)
    setMom(newMom);
  };

  const onAddDay = async () => {
    setIsLoading(true);
    if (dateId === null) {
      await firestore.collection('requestedDates').add(myRequest);
    } else {
      await firestore.collection('requestedDates').doc(dateId).set(myRequest);
      getData();
    }

    //TODO czy po aktualizacji w bazie manualnie ruszac state czy wywołać funkcję, getData(), która po pobraniu z bazy ustawia state
    setMyDays((myDays) => [...myDays, { ...myRequest }]);

    closeModal();
    setIsLoading(false);
  };

  //CHANGE TYPE OF REQUEST
  const choseRequestType = (e) => {
    let type = e.target.dataset.type;
    setMyRequest({ ...myRequest, requestType: type });
  }; 


  const weekdaysNames = weekDays.map((day) => {
    return (
      <div className='day-name' key={day}>
        <span>{day}</span>
      </div>
    );
  });

  const mergedCells = calendarDays.map(({ dayOfWeek, date, classs }) => {
    let myDate = myDays.find( day => day.date === date)
    let requestedType = myDate ? myDate.requestType : '';
    return (
      <Day
        key={uuidv4()}
        showModal={() => toggleModal(date)}
        dayNumber={dayOfWeek}
        requestType={requestedType}
        style={classs}
      ></Day>
    );
  });

  const toggleModal = async (date) => {
    const tt = await getOneDay(date);
    if (tt === null) {
      setMyRequest({
        user_id: testUser.id,
        date: date,
        requestType: '',
      });
    } else {
      setMyRequest(tt);
    }

    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* <h2>Propozycje grafikowe</h2> */}
      <CalendarWrapper>
        <NavigationDiv>
          <Button onClick={() => setMonth(-1)}>Poprzedni</Button>
          <span>{mom.format('MMMM')}</span>
          <Button onClick={() => setMonth(1)}>Następny</Button>
        </NavigationDiv>

        <CalendarBoard>
          {weekdaysNames}
          {mergedCells}
        </CalendarBoard>
        {isLoading && <Spinner />}
      </CalendarWrapper>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          choseType={(e) => choseRequestType(e)}
          onSave={onAddDay}
          chosen={myRequest}
          date={myRequest.date}
        ></Modal>
      )}
    </div>
  );
};

export default Calendar;
