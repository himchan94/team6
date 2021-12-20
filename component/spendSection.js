import dragBar from "../element/dragbar.js";
import saveCont from "./saveCont.js";
import dayCont from "./dayCont.js";

const spendSection = (saveList, bankList) => {
  const _spendSection = document.createElement("section");
  _spendSection.classList.add("spend-section");

  // Adding dragbar
  const _dragBar = dragBar();
  _spendSection.appendChild(_dragBar);

  // Adding saveCont
  const _saveCont = saveCont(saveList);
  _spendSection.appendChild(_saveCont);

  // grouping bankList by same date
  const groups = bankList.reduce((groups, list) => {
    const date = list.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(list);
    return groups;
  }, {});

  // reorder group desc
  const group_desc = Object.values(groups).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Adding dayCont
  const _dayCont = dayCont(group_desc);
  _spendSection.appendChild(_dayCont);
  return _spendSection;
};

export default spendSection;
