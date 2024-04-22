import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(...registerables);

function PieChart() {
  return (
    <Pie
      data={{
        labels: ["Jun", "Jul", "Aug"],
        datasets: [
          {
            id: 1,
            label: "",
            data: [5, 6, 7],
          }
        ],
      }}
    />
  );
}

export default PieChart;
