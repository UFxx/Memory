import { Radar } from "react-chartjs-2";

function RadarChart(props) {
  return (
    <Radar
      data={{
        labels: props.data.labels,
        datasets: [
          {
            id: 1,
            label: "",
            data: props.data.data,
          },
        ],
      }}
    />
  );
}

export default RadarChart;
