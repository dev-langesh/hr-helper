import React, { Component, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// import { UserData } from "./UserData.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const UserData = [
  {
    id: 1,
    type: "Quants",
    score: 10,
  },
  {
    id: 2,
    type: "Logical",
    score: 20,
  },
  {
    id: 3,
    type: "Verbal",
    score: 30,
  },
];

export default function BarChart(props) {
  const [state, setState] = useState({
    data: {
      labels: UserData.map((o) => o.type),
      datasets: [
        {
          label: "Apptitude",
          backgroundColor: "rgba(0, 255, 0, 0.2)",
          borderColor: "rgb(0, 255, 0)",
          borderWidth: 0.1,
          data: UserData.map((o) => o.score),
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Bar Chart",
        },
      },
    },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(props);

    if (props.apptitude) {
      const dt = [
        {
          id: 1,
          type: "Quants",
          score: props.apptitude.quants,
        },
        {
          id: 2,
          type: "Logical",
          score: props.apptitude.logical,
        },
        {
          id: 3,
          type: "Verbal",
          score: props.apptitude.verbal,
        },
      ];

      console.log(dt);

      // setData(dt);

      setState({
        data: {
          labels: dt.map((o) => o.type),
          datasets: [
            {
              label: "Apptitude",
              backgroundColor: "rgba(0, 255, 0, 0.2)",
              borderColor: "rgb(0, 255, 0)",
              borderWidth: 0.1,
              data: dt.map((o) => o.score),
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Bar Chart",
            },
          },
        },
      });
    }
  }, [props]);

  return <Bar data={state.data} options={state.options} />;
}
