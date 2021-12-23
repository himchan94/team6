import dayList from "./dayList.js";

const dayCont = (spendList) => {
  // creating ul (.day-cont)
  const _dayCont = document.createElement("ul");
  _dayCont.classList.add("day-cont");

  // _dayCont.addEventListener("scroll", (e) => {
  //   e.stopPropagation();
  //   scrollStatus = true;
  //   dayContStatus = false;
  // });

  _dayCont.addEventListener("touchmove", (e) => {
    e.stopPropagation();
    // dayContStatus = true;
  });

  _dayCont.addEventListener("touchend", (e) => {
    e.stopPropagation();
    // scrollStatus = false;
    // dayContStatus = false;
  });

  spendList.forEach((list) => {
    const _dayList = dayList(list);
    _dayCont.appendChild(_dayList);
  });

  return _dayCont;
};

export default dayCont;
