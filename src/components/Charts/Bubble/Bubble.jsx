import { Bubble } from "react-chartjs-2";
import Attention from "../Attention/Attention";

function BubbleChart(props) {
  return (
    <>
      <Bubble data={props.data} />
      <Attention />
    </>
  );
}

export default BubbleChart;
