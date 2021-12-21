const header = (accountName) => {
  return `
      <header>
        <a href=""><img src="./images/${accountName}.svg" alt="프로필 이미지" /></a>
        <h1>${accountName}</h1>
        <div class="btn-cont">
          <button class="btn btn-qr">
            <img src="./images/qr.svg" alt="" />
            <img src="./images/line.svg" alt="" />
          </button>
          <button class="btn btn-search">
            <img src="./images/search.svg" alt="" />
          </button>
        </div>
      </header>
      `;
};

export default header;
