import { Bubble } from "react-chartjs-2";
import Attention from "../Attention/Attention";

function BubbleChart(props) {
  return (
    <>
      <Bubble
        data={{
          labels: props.data.labels,
          datasets: [
            {
              id: 1,
              label: "",
              data: props.data.data,
            },
          ],
        }}
      />
      <Attention />
    </>
  );
}

export default BubbleChart;
