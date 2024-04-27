import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

function LineChart(props) {
  return <Line data={props.data} />;
}

export default LineChart;
