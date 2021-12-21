import header from "../component/header.js";
import accountSection from "../component/accountSection.js";
import spendSection from "../component/spendSection.js";
import footer from "../component/footer.js";

const _wrapper = document.createElement("div");
_wrapper.classList.add("wrapper");

const _swiper = document.createElement("div");
_swiper.classList.add("swiper");

_wrapper.appendChild(_swiper);

document.body.appendChild(_wrapper);

const swiper = document.querySelector(".swiper");

const todayYMD = new Date();
const today = todayYMD.getDate();
const lastDayOfMonth = new Date(
  todayYMD.getFullYear(),
  todayYMD.getMonth() + 1,
  0
).getDate();

accountArray.forEach((accountInfo) => {
  createAccount(accountInfo);
});

// Creating Account div function
function createAccount(data) {
  const {
    accountName,
    accountNumber,
    accountMoney,
    limit,
    totalSpend,
    progressColor,
    saveList,
    bankList,
  } = data;

  // Creating Account div
  const accountDiv = document.createElement("div");
  accountDiv.classList.add("account");
  accountDiv.setAttribute("id", accountName);

  // Creating Header component
  const headerComponet = header(accountName);
  accountDiv.insertAdjacentHTML("beforeend", headerComponet);

  // Creating account-section Component
  const accountSectionComponent = accountSection(
    accountNumber,
    accountMoney,
    limit,
    totalSpend,
    progressColor,
    today,
    lastDayOfMonth
  );
  accountDiv.insertAdjacentHTML("beforeend", accountSectionComponent);

  // Creating spendSection
  const spendSectionComponent = spendSection(saveList, bankList);
  accountDiv.appendChild(spendSectionComponent);

  // Append accountDiv
  swiper.append(accountDiv);

  // Adding dragbar event
  const currentAccount = document.getElementById(`${accountName}`);
  const _spendSection = currentAccount.querySelector(".spend-section");
  const _dragbar = _spendSection.querySelector(".dragbar");
  const _dayCont = _spendSection.querySelector(".day-cont");
  const _bar = currentAccount.querySelector(".bar");
  const _accountMoney = currentAccount.querySelector(".account-money");

  const accountMoneyBottom = _accountMoney.getBoundingClientRect().bottom;
  const barTop = _bar.getBoundingClientRect().top;

  const middleLine = (barTop + accountMoneyBottom) / 2;

  _dragbar.addEventListener("touchmove", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    let newHeight = 680 - e.touches[0].clientY;
    _spendSection.style.height = `${newHeight}px`;
    _dayCont.style.height = "548px";
  });

  _dragbar.addEventListener("touchend", (e) => {
    e.preventDefault();

    // 터치 이벤트 종료시점의 clinetY 기준으로 최소, 최대 높이를 결정
    let endPoint = e.changedTouches[0].clientY;

    // 최대 높이
    if (endPoint < middleLine) {
      _spendSection.style.height = "637px";
      _spendSection.style.transition = "height 0.5s";
      setTimeout(() => {
        _spendSection.style.transition = "";
      }, 500);

      // 최소 높이
    } else {
      _spendSection.style.height = "387px";
      _spendSection.style.transition = "height 0.5s";
      setTimeout(() => {
        _spendSection.style.transition = "";
      }, 500);
      _dayCont.style.height = "331px";
    }
  });
}

// footer 생성
const footerComponent = footer();
document.body.insertAdjacentHTML("beforeend", footerComponent);

const wrapper = document.querySelector(".wrapper");
let currentpage = 0;
const lastPage = accountArray.length;
let scrollPosition = 0;
wrapper.addEventListener("scroll", (e) => {
  e.preventDefault();
  console.log(wrapper.scrollLeft);

  swiper.style.left = `${-wrapper.scrollLeft}px`;

  if (wrapper.scrollLeft > 187) {
    swiper.style.transition = "0.5s";
    swiper.style.left = "-187px";
    console.log(wrapper.scrollLeft);
  }

  swiper.style.transition = "";
});

// // Adding swiper event
// const xCooridinates = { start: 0, move: 0, end: 0 };
// const dragbar = document.querySelector(".dragbar");

// swiper.addEventListener("touchstart", (e) => {
//   if (e.target !== dragbar) {
//     // e.preventDefault();
//     xCooridinates.start = e.touches[0].clientX;
//     // console.log(e.touches[0].clientX);
//   }
// });

// swiper.addEventListener("touchmove", (e) => {
//   if (e.target !== dragbar) {
//     // e.preventDefault();
//     xCooridinates.move = e.touches[0].clientX;
//     swiper.style.left = `${xCooridinates.move - xCooridinates.start}px`;
//     xCooridinates.start = 375;
//   }
// });
