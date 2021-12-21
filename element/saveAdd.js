const saveAdd = () => {
  const _saveAdd = document.createElement("div");
  _saveAdd.classList.add("save-add");

  const _addBtn = document.createElement("button");
  _addBtn.classList.add("btn");
  _addBtn.classList.add("btn-add");

  const img = document.createElement("img");
  img.src = "./images/add.svg";
  img.alt = "통장 추가 버튼";

  const span = document.createElement("span");
  span.innerHTML = "저금통 만들기";

  _addBtn.appendChild(img);
  _addBtn.appendChild(span);

  _saveAdd.appendChild(_addBtn);

  return _saveAdd;
};

export default saveAdd;
