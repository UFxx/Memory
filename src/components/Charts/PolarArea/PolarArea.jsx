import { PolarArea } from "react-chartjs-2";

function PolarAreaChart(props) {
  return (
    <PolarArea
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
  );
}

export default PolarAreaChart;
