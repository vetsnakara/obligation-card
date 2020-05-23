import { PERIODS } from "./config/constants";

export const formatDate = date => {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear();

  return dd + "." + mm + "." + yy;
};

export const parseDate = str => {
  const [day, month, year] = str.split(".").map(Number);
  return new Date(year, month, day);
};

export const getDatesRange = (startDate, endDate) => {
  const dates = [];
  let currentDate = startDate;

  const addDays = (current, days) => {
    const date = new Date(current.valueOf());
    date.setDate(current.getDate() + days);
    return date;
  };

  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return dates.map(formatDate);
};

export const getDatesByPeriod = period => {
  const dateFrom = new Date();
  const dateTo = new Date();

  switch (period) {
    case PERIODS.WEEK:
      const weekAgo = dateFrom.getDate() - 7;
      dateFrom.setDate(weekAgo);
      break;
    case PERIODS.MONTH:
      const monthAgo = dateFrom.getMonth() - 1;
      dateFrom.setMonth(monthAgo);
      break;
    case PERIODS.QUARTER:
      const quarterAgo = dateFrom.getMonth() - 3;
      dateFrom.setMonth(quarterAgo);
      break;
    case PERIODS.YEAR:
      const yearAgo = dateFrom.getFullYear() - 1;
      dateFrom.setFullYear(yearAgo);
      break;
    default:
  }

  const datesRange = getDatesRange(dateFrom, dateTo);

  return datesRange;
};

export const sortDatesInPlace = dates => {
  dates.sort((a, b) => {
    a = parseDate(a);
    b = parseDate(b);
    return new Date(a) - new Date(b);
  });
  return dates;
};
