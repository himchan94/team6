import findDay from "../script/findDay.js";

const dayList = (list) => {
  // total spend
  const totalSpendMoney = list.reduce((acc, cur) => {
    if (cur.income !== "in") {
      return acc + cur.price;
    }
    return acc;
  }, 0);

  // creating li (.day-list)
  const _dayList = document.createElement("li");
  _dayList.classList.add("day-list");

  // total spend money span tag
  const totalSpan = document.createElement("span");
  totalSpan.classList.add("total");
  totalSpan.innerHTML = `${totalSpendMoney.toLocaleString()}원 지출`;
  _dayList.appendChild(totalSpan);

  // date span tag
  const daySpan = document.createElement("span");
  daySpan.classList.add("date");
  daySpan.innerHTML = findDay(list);
  _dayList.appendChild(daySpan);

  // creating spend-list
  const _spendCont = document.createElement("ul");
  _spendCont.classList.add("spend-cont");

  // loop for add spendlist
  list.forEach((spend) => {
    const { history, income, price } = spend;

    const _spendList = document.createElement("li");
    _spendList.classList.add("spend-list");

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("spend-title");

    const costSpan = document.createElement("span");
    costSpan.classList.add("spend-cost");

    if (income === "in") {
      _spendList.classList.add("deposit");

      titleSpan.innerHTML = history;
      costSpan.innerHTML = `+${price}`;

      _spendList.appendChild(titleSpan);
      _spendList.appendChild(costSpan);

      _spendCont.appendChild(_spendList);
    } else {
      titleSpan.innerHTML = history;
      costSpan.innerHTML = `${price}`;

      _spendList.appendChild(titleSpan);
      _spendList.appendChild(costSpan);

      _spendCont.appendChild(_spendList);
    }
  });

  _dayList.appendChild(_spendCont);
  return _dayList;
};

export default dayList;
