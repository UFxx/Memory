import React, { useState, createContext } from "react";

import OpenSettingsIconDark from "./assets/open-settings-icon-dark-theme.png";
import OpenSettingsIconLight from "./assets/open-settings-icon-light-theme.png";

import Settings from "./components/Settings/Settings";
import Buttons from "./components/Buttons/Buttons";
import Charts from "./components/Charts/Charts";
import Donwload from "./components/Donwload/Donwload";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

export const Theme = createContext("without provider");

function App() {
  const colors = [
    "#C7C9CD",
    "#FFCD56",
    "#9966FF",
    "#FF9F40",
    "#4BC0C0",
    "#FF6384",
    "#FF6384",
  ];

  function getRandomColor() {
    let randomNum = Math.round(Math.random() * colors.length - 1);
    return colors[randomNum];
  }

  const [theme, setTheme] = useState(true);

  const [labels, setLabels] = useState(["label1", "label2", "label3"]);
  const [values, setValues] = useState([
    { id: 1, label: "Заголовки", data: [] },
    { id: 2, label: "", data: [], backgroundColor: getRandomColor() },
    { id: 3, label: "", data: [], backgroundColor: getRandomColor() },
    { id: 4, label: "", data: [], backgroundColor: getRandomColor() },
  ]);

  const data = {
    labels: labels.filter(function (item, pos) {
      return labels.indexOf(item) === pos;
    }),
    datasets: [values[1], values[2], values[3]],
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
    <>
      <div className={`container-${theme ? "dark" : "light"}`}>
        <ThemeChanger setTheme={setTheme} theme={theme} />
        <div className={`content-${theme ? "dark" : "light"}`}>
          <div className={`chart-container-${theme ? "dark" : "light"}`}>
            {/* ValueState - which radio button is clicked */}
            <Theme.Provider value={theme}>
              <Charts valueState={radioValue} data={data} />
            </Theme.Provider>
          </div>

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
      <Settings
        open={settingsOpen}
        changeSettingsOpen={changeSettingsOpen}
        data={data}
        setLabels={setLabels}
        setValues={setValues}
        values={values}
        theme={theme}
      />
    </>
  );
}

export default App;
