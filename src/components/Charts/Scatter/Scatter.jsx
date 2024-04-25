import { Scatter } from "react-chartjs-2";

function ScatterChart(props) {
  return (
    <Scatter
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

export default ScatterChart;
