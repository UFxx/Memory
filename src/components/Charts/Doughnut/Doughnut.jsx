import { Doughnut } from "react-chartjs-2";

function DoughnutChart(props) {
  return (
    <Doughnut
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

export default DoughnutChart;