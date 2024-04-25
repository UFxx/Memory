import { Pie } from "react-chartjs-2";

function PieChart(props) {
  return (
    <Pie
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

export default PieChart;
