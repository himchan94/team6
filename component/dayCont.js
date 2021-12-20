import dayList from "./dayList.js";

const dayCont = (spendList) => {
  // creating ul (.day-cont)
  const _dayCont = document.createElement("ul");
  _dayCont.classList.add("day-cont");

  spendList.forEach((list) => {
    const _dayList = dayList(list);
    _dayCont.appendChild(_dayList);
  });

  return _dayCont;
};

export default dayCont;

// spendList format
// [[
// { date: '2021-12-30', income: 'out', classify: 'mart', history: '이마트', price: 99999; }
// { date: '2021-12-30', income: 'out', classify: 'shopping', history: '교보문고', price: 25000; }
// ]]
