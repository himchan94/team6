const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const today = new Date();

const findDay = (info) => {
  const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utc2 = Date.UTC(
    new Date(info[0].date).getFullYear(),
    new Date(info[0].date).getMonth(),
    new Date(info[0].date).getDate()
  );

  const date = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  if (date === 0) {
    return "오늘";
  } else if (date === -1) {
    return "어제";
  }

  return `${-date}일전`;
};

export default findDay;
