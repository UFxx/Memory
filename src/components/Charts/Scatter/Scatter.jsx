import { Scatter } from "react-chartjs-2";
import Attention from "../Attention/Attention";

function ScatterChart(props) {
  return (
    <>
      <Scatter data={props.data} />
      <Attention />
    </>
  );
}

export default ScatterChart;
