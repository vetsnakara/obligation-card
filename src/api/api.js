import { getDatesRange, getDatesByPeriod } from "../utils";
import { PERIODS } from "../config/constants";

export const dataSpec = {
  XS0971721963: {
    from: new Date("2000/12/01"),
    to: new Date(),
    description: {
      title: "NII CAPITAL",
      code: "USD",
      rating: 7.625,
      address: "NII CAPITAL CORP, telecommunictions, NR, till 01.06.2016",
    },
  },
  RU000A0JU4L3: {
    from: new Date("2000/12/01"),
    to: new Date(),
    description: {
      title: "SOME COMPANY",
      code: "RU",
      rating: 100.5,
      address: "SOME COMPANY, real estate, RU, till 11.11.2011",
    },
  },
};

export const data = Object.entries(dataSpec).reduce(
  (acc, [isin, { from, to, description }]) => {
    const dates = getDatesRange(from, to);

    const isinData = {
      description,
      data: {},
    };

    acc[isin] = dates.reduce((isinData, date) => {
      isinData.data[date] = {
        date,
        price: (Math.random() * 100).toFixed(2),
        yield: (Math.random() * 10).toFixed(2),
        spread: (Math.random() * 1000).toFixed(2),
      };

      return isinData;
    }, isinData);

    return acc;
  },
  {}
);

const getIsinsData = (isin, dates) => {
  return Object.keys(data[isin].data)
    .filter((date) => dates.includes(date))
    .reduce((acc, date) => {
      acc[date] = data[isin].data[date];
      return acc;
    }, {});
};

export const http = {
  get(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isin = url.split("/").slice(-1)[0];
        const lastWeekDates = getDatesByPeriod(PERIODS.WEEK);
        const weekData = getIsinsData(isin, lastWeekDates);
        const { description } = data[isin];
        resolve({
          description,
          data: weekData,
        });
      }, 1000);
    });
  },
  post(url, { dates }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isin = url.split("/").slice(-1)[0];
        const isinsData = getIsinsData(isin, dates);
        resolve(isinsData);
      }, 1000);
    });
  },
};
