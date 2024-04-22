import React, { useState } from "react";

import OpenSettingsIcon from "./assets/open-settings-icon.png";

import Settings from "./components/Settings/Settings";
import PieChart from "./components/Pie/Pie";
import BarChart from "./components/Bar/Bar";
import DoughnutChart from "./components/Doughnut/Doughnut";

function App() {
  const [pieChecked, setPieChecked] = useState(true);
  const [barChecked, setBarChecked] = useState(false);
  const [doughnutChecked, setDoughnutChecked] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  function changeSettingsOpen() {
    setSettingsOpen(!settingsOpen);
  }

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
      <Settings open={settingsOpen} changeSettingsOpen={changeSettingsOpen} />
      <img
        src={OpenSettingsIcon}
        alt="open settings icon"
        className="settings-open-button"
        onClick={changeSettingsOpen}
      />
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
