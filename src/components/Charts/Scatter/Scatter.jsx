import { Scatter } from "react-chartjs-2";
import Attention from "../Attention/Attention";

function ScatterChart(props) {
  return (
    <>
      <Scatter
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

export default ScatterChart;
