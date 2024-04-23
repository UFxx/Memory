import React, { useState } from "react";

import OpenSettingsIcon from "./assets/open-settings-icon.png";

import Settings from "./components/Settings/Settings";
import Buttons from "./components/Buttons/Buttons";
import Charts from "./components/Charts/Charts";

function App() {
  const [labels, setLabels] = useState(['label1', 'label2', 'label3']);
  const [values, setValues] = useState([100, 200, 300]);
  const data = {
    labels: labels,
    data: values,
  };

  const [radioValue, setRadioValue] = useState("1");
  const [settingsOpen, setSettingsOpen] = useState(false);

  function changeSettingsOpen() {
    setSettingsOpen(!settingsOpen);
  }

  function changeValue(e) {
    setRadioValue(e.target.value);
  }

  return (
    <div className="content">
      <div className="chart-container">
        {/* ValueState - which radio button is clicked */}
        <Charts valueState={radioValue} data={data} />
      </div>
      <Settings
        open={settingsOpen}
        changeSettingsOpen={changeSettingsOpen}
        data={data}
        setLabels={setLabels}
        setValues={setValues}
      />
      <img
        src={OpenSettingsIcon}
        alt="open settings icon"
        className="settings-open-button"
        onClick={changeSettingsOpen}
      />
      <div className="choose-chart-type">
        <Buttons changeValue={changeValue} valueState={radioValue} />
      </div>
    </div>
  );
}

export default App;
