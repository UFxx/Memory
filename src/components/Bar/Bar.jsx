import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

function BarChart() {
  return (
    <Bar
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

export default BarChart;
