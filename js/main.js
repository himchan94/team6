const spendSection = document.querySelector(".spend-section");
const dragBar = spendSection.querySelector(".spend-section > .dragbar");
const limit = document.querySelector(".limit");
const accountMoney = document.querySelector(".account-money");

const accountMoneyBottom = accountMoney.getBoundingClientRect().bottom;
const limitTop = limit.getBoundingClientRect().top;

let middleLine = (limitTop + accountMoneyBottom) / 2;
// middleLine(현재 161.5)를 기준

let original = spendSection.clientHeight;
// spend-section의 기본 높이 373px

dragBar.addEventListener("touchmove", (e) => {
  e.preventDefault();
  let newHeight = 680 - e.touches[0].clientY;
  spendSection.style.height = `${newHeight}px`;
});

dragBar.addEventListener("touchend", (e) => {
  e.preventDefault();
  let endPoint = e.changedTouches[0].clientY;
  // 터치 이벤트 종료시점의 clinetY 기준으로 최소, 최대 높이를 결정
  if (endPoint < middleLine) {
    spendSection.style.height = "637px";
    // 최대 높이
  } else {
    spendSection.style.height = "387px";
    // 최소 높이
  }
});
