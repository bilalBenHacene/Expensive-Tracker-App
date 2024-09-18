import CanvasJSReact from "@canvasjs/react-charts";
import Chart from "react-apexcharts";
import React from "react";

const ChartDesign = ({expense = 100, income = 500}) => {
    const options = {
        labels: ["Income", "Expense"],
        chart: {
          width: "200px",
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        hover: { mode: null },
        plotOptions: {
          donut: {
            expandOnClick: false,
            donut: {
              labels: {
                show: false,
              },
            },
          },
        },
        tooltip: {
          enabled: true,
          theme: "dark",
          style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
          },
        },
      };
  return (
    <>
      <Chart
        options={options}
        series={[expense,income]}
        type="pie"
        width="100%"
        height="125%"
      />
    </>
  );
};

export default ChartDesign;
