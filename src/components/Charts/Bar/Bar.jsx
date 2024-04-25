import { Bar } from "react-chartjs-2";

function BarChart(props) {
  return (
    <Bar
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

export default BarChart;
