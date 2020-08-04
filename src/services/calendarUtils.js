import moment from 'moment';
import 'moment/locale/pl';

// const momentObj = moment(); //.locale('pl');

export const weekDays = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd'];

export const monthDays = (month) => {

  const prevMonthDays = [];
  const thisMonthDays = [];
  const mom = moment(month); //.set({ date: 1, month: month, year: 2020 })

  const firstDayOfMonth = mom.format('yyyy-MM-DD');
  const weekStartDay = mom.format('d');
  const numberOfDays = mom.daysInMonth();

  for (let i = weekStartDay - 2; i >= 0; i--) {
    let testDate = moment(firstDayOfMonth).set('date', -i).format('yyyy-MM-DD');
    const dateObj = {
      dayOfWeek: moment(testDate).format('D'),
      date: moment(testDate).format('yyy-MM-DD'),
      classs: 'prev-month',
    };
    prevMonthDays.push(dateObj);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    let testDate = moment(firstDayOfMonth)
      .set('date', +i)
      .format('yyyy-MM-DD');
    const dateObj = {
      dayOfWeek: moment(testDate).format('D'),
      date: moment(testDate).format('yyy-MM-DD'),
      class: '',
    };
    thisMonthDays.push(dateObj);
  }

  const mergedDays = [...prevMonthDays, ...thisMonthDays];

  return { fullData: mergedDays, thisMonth: thisMonthDays};
};

// export const startOfMont = (date) => {
//   // console.log(moment().daysInMonth())
//   // let dateObject = momentObj.set('month', month);
//   let firstDay = moment(date).startOf('month').format('d');
//   return firstDay;
// };
