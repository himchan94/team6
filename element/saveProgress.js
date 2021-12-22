const saveProgress = (name, money, color, target) => {
  const saveProgress = document.createElement("div");
  saveProgress.classList.add("save-progress");
  saveProgress.style.backgroundColor = color;
  saveProgress.style.width = `${(money / target) * 100}px`;

  const spanName = document.createElement("span");
  const spanMoney = document.createElement("span");

  spanName.innerHTML = name;
  spanMoney.innerHTML = money;

  saveProgress.appendChild(spanName);
  saveProgress.appendChild(spanMoney);

  return saveProgress;
};

export default saveProgress;
