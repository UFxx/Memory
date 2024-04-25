import DoughnutChart from "./Doughnut/Doughnut";
import PieChart from "./Pie/Pie";
import BarChart from "./Bar/Bar";
import LineChart from "./Line/Line";
import BubbleChart from "./Bubble/Bubble";
import PolarAreaChart from "./PolarArea/PolarArea";
import RadarChart from "./Radar/Radar";
import ScatterChart from "./Scatter/Scatter";

function Charts(props) {
  return (
    <>
      {props.valueState === "1" ? <PieChart data={props.data} /> : null}
      {props.valueState === "2" ? <BarChart data={props.data} /> : null}
      {props.valueState === "3" ? <DoughnutChart data={props.data} /> : null}
      {props.valueState === "4" ? <LineChart data={props.data} /> : null}
      {props.valueState === "5" ? <BubbleChart data={props.data} /> : null}
      {props.valueState === "6" ? <PolarAreaChart data={props.data} /> : null}
      {props.valueState === "7" ? <RadarChart data={props.data} /> : null}
      {props.valueState === "8" ? <ScatterChart data={props.data} /> : null}
    </>
  );
}

export default Charts;
