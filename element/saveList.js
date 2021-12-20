import saveProgress from "./saveProgress.js";

const saveList = (saveArr) => {
  const saveList = document.createElement("ul");
  saveList.classList.add("save-list");

  saveArr.forEach((info) => {
    const { name, money, color } = info;
    const newSaveProgress = saveProgress(name, money, color);

    const saveBar = document.createElement("li");
    saveBar.classList.add("save-bar");

    saveBar.appendChild(newSaveProgress);

    saveList.appendChild(saveBar);
  });

  return saveList;
};

export default saveList;
