import header from "../component/header.js";
import accountSection from "../component/accountSection.js";
import spendSection from "../component/spendSection.js";
import footer from "../component/footer.js";

const slider = document.querySelector(".slider");

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

// Account를 생성하는 함수
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

  const spendSectionComponent = spendSection();

  accountDiv.appendChild(spendSectionComponent);

  slider.append(accountDiv);

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
    console.log(e);
    e.preventDefault();
    let newHeight = 680 - e.touches[0].clientY;
    _spendSection.style.height = `${newHeight}px`;
    // dayCont.style.height = "548px";
  });

  _dragbar.addEventListener("touchend", (e) => {
    e.preventDefault();
    let endPoint = e.changedTouches[0].clientY;
    // 터치 이벤트 종료시점의 clinetY 기준으로 최소, 최대 높이를 결정
    if (endPoint < middleLine) {
      _spendSection.style.height = "637px";
      _spendSection.style.transition = "height 0.5s";
      setTimeout(() => {
        _spendSection.style.transition = "";
      }, 500);

      // 최대 높이
    } else {
      _spendSection.style.height = "387px";
      _spendSection.style.transition = "height 0.5s";
      setTimeout(() => {
        _spendSection.style.transition = "";
      }, 500);
      // 최소 높이
    }
  });

  console.log(_dragbar);

  // 돔 완성 후 여기서 이벤트 추가해야함 id를
  // const sp = document.querySelector(".spend-section");
  // console.log(sp);
}

// footer 생성
const footerComponent = footer();
document.body.insertAdjacentHTML("beforeend", footerComponent);

// const manage = document.querySelectorAll(".btn-manage");
// manage.forEach((i) =>
//   i.addEventListener("click", () => {
//     console.log("hi");
//   })
// );

//  <div class="dragbar"></div>

//     <div class="save-cont">
//       <ul class="save-list">
//         <li class="save-bar">
//           <div class="save-progress">
//             <span class="save-name">여행가자</span>
//             <span class="save-money">142,200원 </span>
//           </div>
//         </li>
//       </ul>

//       <div class="save-add">
//         <button class="btn btn-add">
//           <img src="./images/add.svg" alt="" />
//           <span> 저금통 만들기</span>
//         </button>
//       </div>
//     </div>

//     <ul class="day-cont">
//       <li class="day-list">
//         <strong class="day">오늘</strong>
//         <span class="total">12000원 지출</span>

//         <ul class="spend-cont">
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list deposit">
//             <span class="spend-title">김길수</span>
//             <span class="spend-cost">+ 20,000</span>
//           </li>
//         </ul>
//       </li>

//       <li class="day-list">
//         <strong class="day">오늘</strong>
//         <span class="total">12000원 지출</span>

//         <ul class="spend-cont">
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list deposit">
//             <span class="spend-title">김길수</span>
//             <span class="spend-cost">+ 20,000</span>
//           </li>
//         </ul>
//       </li>

//       <li class="day-list">
//         <strong class="day">오늘</strong>
//         <span class="total">12000원 지출</span>

//         <ul class="spend-cont">
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list deposit">
//             <span class="spend-title">김길수</span>
//             <span class="spend-cost">+ 20,000</span>
//           </li>
//         </ul>
//       </li>

//       <li class="day-list">
//         <strong class="day">오늘</strong>
//         <span class="total">12000원 지출</span>

//         <ul class="spend-cont">
//           <li class="spend-list">
//             <span class="spend-title">미스터피자</span>
//             <span class="spend-cost">32,000</span>
//           </li>
//           <li class="spend-list deposit">
//             <span class="spend-title">김길수</span>
//             <span class="spend-cost">+ 20,000</span>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </section>`;
