import { Doughnut } from "react-chartjs-2";

function DoughnutChart(props) {
  return <Doughnut data={props.data} />;
}

export default DoughnutChart;
