import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

export const Graph = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const context = chartRef.current.getContext("2d");

    const chart = new Chart(context, {
      type: "line",
      data: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            label: "Sales",
            data: data.map((item) => item.value),
            backgroundColor: "transparent",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={chartRef} />;
};
