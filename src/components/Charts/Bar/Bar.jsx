import { Bar } from "react-chartjs-2";

function BarChart(props) {
  return <Bar data={props.data} />;
}

export default BarChart;
