import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

function DoughnutChart() {
  return (
    <Doughnut
      data={{
        labels: ["Jun", "Jul", "Aug"],
        datasets: [
          {
            id: 1,
            label: "",
            data: [5, 6, 7],
          },
        ],
      }}
    />
  );
}

export default DoughnutChart;
