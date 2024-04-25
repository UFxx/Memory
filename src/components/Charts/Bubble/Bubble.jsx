import { Bubble } from "react-chartjs-2";

function BubbleChart(props) {
  return (
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
  );
}

export default BubbleChart;
