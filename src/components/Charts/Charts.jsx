import DoughnutChart from "./Doughnut/Doughnut";
import PieChart from "./Pie/Pie";
import BarChart from "./Bar/Bar";

function Charts(props) {
  return (
    <>
      {props.valueState === "1" ? <PieChart data={props.data} /> : null}
      {props.valueState === "2" ? <BarChart data={props.data} /> : null}
      {props.valueState === "3" ? <DoughnutChart data={props.data} /> : null}
    </>
  );
}

export default Charts;
