import React, { useState, useEffect } from "react";

import PieChart from "./components/Pie/Pie";
import BarChart from "./components/Bar/Bar";
import DoughnutChart from "./components/Doughnut/Doughnut";

function App() {
  const [pieChecked, setPieChecked] = useState(true);
  const [barChecked, setBarChecked] = useState(false);
  const [doughnutChecked, setDoughnutChecked] = useState(false);

  function clearAllRadio() {
    setBarChecked(false);
    setPieChecked(false);
    setDoughnutChecked(false);
  }

  function changePieChecked() {
    clearAllRadio();
    setPieChecked(!pieChecked);
  }

  function changeBarChecked() {
    clearAllRadio();
    setBarChecked(!barChecked);
  }

  function changeDoughnutChecked() {
    clearAllRadio();
    setDoughnutChecked(!doughnutChecked);
  }

  return (
    <div className="content">
      <div className="chart-container">
        {barChecked ? <BarChart /> : null}
        {pieChecked ? <PieChart /> : null}
        {doughnutChecked ? <DoughnutChart /> : null}
      </div>
        <div className="choose-chart-type">
          <input
            type="radio"
            name="chart-type"
            id="radio-pie"
            checked={pieChecked}
            onChange={changePieChecked}
          />
          <label htmlFor="radio-pie">Pie</label>
          <input
            type="radio"
            name="chart-type"
            id="radio-bar"
            checked={barChecked}
            onChange={changeBarChecked}
          />
          <label htmlFor="radio-bar">Bar</label>
          <input
            type="radio"
            name="chart-type"
            id="radio-doughnut"
            checked={doughnutChecked}
            onChange={changeDoughnutChecked}
          />
          <label htmlFor="radio-doughnut">Doughnut</label>
        </div>
    </div>
  );
}

export default App;
