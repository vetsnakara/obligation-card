import React, { useEffect } from "react";

import { ButtonGroup } from "../ButtonGroup";
import { Select } from "../Select";
import { Graph } from "../Graph";

import { Header } from "./Header";

import { PERIODS, PARAMS } from "../../config/constants";

const periods = [
  { id: PERIODS.WEEK, text: "Week" },
  { id: PERIODS.MONTH, text: "Month" },
  { id: PERIODS.QUARTER, text: "Quarter" },
  { id: PERIODS.YEAR, text: "Year" },
];

const params = [
  { value: PARAMS.YIELD, text: "Yield" },
  { value: PARAMS.SPREAD, text: "Spread" },
  { value: PARAMS.PRICE, text: "Price" },
];

export const Card = ({
  isin,
  selectedParam,
  selectedPeriod,
  description,
  data,
  loading,
  fetchInitialData,
  fetchPeriodData,
  changeParam,
}) => {
  useEffect(() => {
    fetchInitialData(isin);
  }, [isin, fetchInitialData]);

  return (
    <article className="card">
      <Header data={description} />

      <div className="card__controls">
        <ButtonGroup
          options={periods}
          selectedId={selectedPeriod}
          onSelect={fetchPeriodData}
        />

        <Select
          options={params}
          selectedValue={selectedParam}
          onSelect={changeParam}
        />

        {loading && <div style={{ color: "orangered" }}>Loading ...</div>}
      </div>

      <Graph data={data} />
    </article>
  );
};
