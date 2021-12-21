const accountSection = (
  accountNumber,
  accountMoney,
  limit,
  totalSpend,
  progressColor,
  today,
  lastDayOfMonth
) => {
  return `<section class="account-section">
        <div class="account-cont">
          <strong class="account-num">${accountNumber}</strong>
          <span class="account-money"><strong>${accountMoney.toLocaleString()}</strong>원</span>
          <div class="progress-cont">
            <span class="progress-rate ir-blind"></span>
            <div class="bar">
              <div class="progress" style="width:${
                (totalSpend / limit) * 202
              }px; background-color:${progressColor};"></div>
            </div>
            <button class="btn btn-manage" >
              <img src="./images/manage.svg" alt="지출관리" />
            </button>
          </div>
          <span class="account-desc">${lastDayOfMonth - today + 1}일 동안 ${(
    limit - totalSpend
  ).toLocaleString()}원 남음
              </span>
          <button class="btn btn-send" onclick="sayHello()">이체</button>
        </div>
        <aside>
          <span>지금 낮은 이자로 생활대출을 신청하세요!</span>
          <a href="#">Go</a>
        </aside>
      </section>`;
};

export default accountSection;
