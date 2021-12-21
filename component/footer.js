const footer = () => {
  return `<nav>
      <button class="btn btn-home active">
        <span class="ir-blind">home</span>
        <img src="./images/home.svg" alt="home" />
      </button>
      <button class="btn btn-arrow">
        <img src="./images/left-arrow.svg" alt="refresh" />
        <img src="./images/right-arrow.svg" alt="refresh" />
        <span class="ir-blind">home</span>
      </button>
      <button class="btn btn-message">
        <span class="ir-blind">message</span>
        <img src="./images/message.svg" alt="message" />
      </button>
      <button class="btn btn-more">
        <span class="ir-blind">more</span>
        <img src="./images/more.svg" alt="more" />
      </button>
    </nav>`;
};

export default footer;
