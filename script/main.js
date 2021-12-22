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

  // Adding save-cont event
  const _saveOuter = document.querySelector(".save-outer");
  const _saveCont = document.querySelector(".save-cont");
  const saveXCoord = { start: 0, offset: 0, cur: 0 };
  const screenWidth = _saveOuter.clientWidth;

  _saveOuter.addEventListener("touchstart", (e) => {
    saveXCoord.start = e.touches[0].pageX;
  });

  _saveOuter.addEventListener("touchmove", (e) => {
    saveXCoord.offset =
      saveXCoord.cur + (e.targetTouches[0].pageX - saveXCoord.start);
    _saveCont.style.transform = `translate3d(${saveXCoord.offset}px, 0px, 0px)`;
    _saveCont.style.transitionDuration = "5ms";
  });

  _saveOuter.addEventListener("touchend", (e) => {
    const sum = saveXCoord.cur + (e.changedTouches[0].pageX - saveXCoord.start);
    let destination = Math.round(sum / screenWidth) * screenWidth;

    if (destination > 0) {
      destination = 0;
    } else if (destination < -(screenWidth * 0.5)) {
      destination = -screenWidth;
    }

    _saveCont.style.transform = `translate3d(${destination}px, 0px, 0px)`;
    _saveCont.style.transitionDuration = "300ms";
    saveXCoord.cur = destination;

    setTimeout(() => {
      _saveCont.style.transitionDuration = "0ms";
    }, 300);
  });
}

// footer 생성
const footerComponent = footer();
document.body.insertAdjacentHTML("beforeend", footerComponent);

// // Adding swiper event
// const xCooridinates = { start: 0, move: 0, end: 0 };
// const dragbar = document.querySelector(".dragbar");

// swiper.addEventListener("touchstart", (e) => {
//   if (!scrollStatus) {
//     if (e.target !== dragbar) {
//       // e.preventDefault();
//       xCooridinates.start = e.touches[0].clientX;
//       // console.log(e.touches[0].clientX);
//     }
//   }
// });

// swiper.addEventListener("touchmove", (e) => {
//   if (!scrollStatus) {
//     if (e.target !== dragbar) {
//       // e.preventDefault();

//       if (xCooridinates.start < e.touches[0].clientX) {
//       }
//       {
//         xCooridinates.move = e.touches[0].clientX;
//         swiper.style.left = `-${xCooridinates.start - xCooridinates.move}px`;
//         console.log(xCooridinates);
//       }
//     }
//   }
// });
