import { createSelector } from "reselect";
import { getDatesByPeriod, sortDatesInPlace } from "../../utils";

const paramSelector = (state) => state.param;
const periodSelector = (state) => state.period;
const dataSelector = (state) => state.data;

const selectData = (param, period, data) => {
  const datesPeriodRange = getDatesByPeriod(period);

  const periodDates = Object.keys(data).filter((date) =>
    datesPeriodRange.includes(date)
  );

  sortDatesInPlace(periodDates);

  return periodDates.map((date) => ({
    label: date,
    value: data[date][param],
  }));
};

export const getData = createSelector(
  [paramSelector, periodSelector, dataSelector],
  selectData
);
