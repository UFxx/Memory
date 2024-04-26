import React, { useState } from "react";

import OpenSettingsIconDark from "./assets/open-settings-icon-dark-theme.png";
import OpenSettingsIconLight from "./assets/open-settings-icon-light-theme.png";

import Settings from "./components/Settings/Settings";
import Buttons from "./components/Buttons/Buttons";
import Charts from "./components/Charts/Charts";
import Donwload from "./components/Donwload/Donwload";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

function App() {
  const [theme, setTheme] = useState(true);

  const [labels, setLabels] = useState(["label1", "label2", "label3"]);
  const [values, setValues] = useState([100, 200, 300]);

  const data = {
    labels: labels.filter(function (item, pos) {
      return labels.indexOf(item) === pos;
    }),
    data: values.filter(function (item, pos) {
      return values.indexOf(item) === pos;
    }),
  };

  const [radioValue, setRadioValue] = useState("1");
  const [settingsOpen, setSettingsOpen] = useState(false);

  function changeSettingsOpen() {
    setSettingsOpen(!settingsOpen);
  }

  function changeRadioValue(e) {
    setRadioValue(e.target.value);
  }

  return (
    <div className={`container-${theme ? "dark" : "light"}`}>
      <ThemeChanger setTheme={setTheme} theme={theme} />
      <div className={`content-${theme ? "dark" : "light"}`}>
        <div className={`chart-container-${theme ? "dark" : "light"}`}>
          {/* ValueState - which radio button is clicked */}
          <Charts valueState={radioValue} data={data} />
        </div>
        <Settings
          open={settingsOpen}
          changeSettingsOpen={changeSettingsOpen}
          data={data}
          setLabels={setLabels}
          setValues={setValues}
          theme={theme}
        />
        {theme ? (
          <img
            src={OpenSettingsIconDark}
            alt="open settings icon"
            className="settings-open-button"
            onClick={changeSettingsOpen}
          />
        ) : (
          <img
            src={OpenSettingsIconLight}
            alt="open settings icon"
            className="settings-open-button"
            onClick={changeSettingsOpen}
          />
        )}
        <Donwload theme={theme} />
        <div className="choose-chart-type">
          <Buttons
            changeRadioValue={changeRadioValue}
            valueState={radioValue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
