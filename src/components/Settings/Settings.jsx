import React, { createContext, useState } from "react";

import CloseSettingsIconDark from "../../assets/close-settings-icon-dark-theme.png";
import CloseSettingsIconLight from "../../assets/close-settings-icon-light-theme.png";

import Dataset from "./Dataset/Dataset";

export const DatasetsState = createContext("without provider");

function Settings(props) {
  const [settingsDatasets, setSettingsDatasets] = useState([
    <Dataset id={-1} setLabels={props.setLabels} key={0} name="Заголовки" />,
  ]);

  const colors = [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FF9F40",
    "#9966FF",
    "#FFCD56",
    "#C7C9CD",
  ];

  function addDataset() {
    let settingsDatasetsCopy = Object.assign([], settingsDatasets);
    settingsDatasetsCopy.push(
      <Dataset
        id={settingsDatasetsCopy.length}
        datasets={props.datasets}
        setDatasets={props.setDatasets}
        key={settingsDatasetsCopy.length}
        settingsDatasets={settingsDatasets}
        setSettingsDatasets={setSettingsDatasets}
      />
    );
    setSettingsDatasets(settingsDatasetsCopy);

    let randomIndex = Math.round(Math.random() * 6);
    function randomColor() {
      return colors[randomIndex];
    }

    let valuesCopy = Object.assign([], props.datasets);
    valuesCopy.push({
      id: settingsDatasets.length,
      label: "",
      data: [],
      backgroundColor: randomColor,
    });
    props.setDatasets(valuesCopy);
  }
  return (
    <div className={`chart-settings__${props.open ? "open" : "hidden"}`}>
      {props.theme ? (
        <img
          src={CloseSettingsIconDark}
          alt="close settings icon"
          className="settings-close-button"
          onClick={props.changeSettingsOpen}
        />
      ) : (
        <img
          src={CloseSettingsIconLight}
          alt="close settings icon"
          className="settings-close-button"
          onClick={props.changeSettingsOpen}
        />
      )}
      <div className="settings-content">
        <div className="datasets">
          <DatasetsState.Provider value={settingsDatasets}>
            {settingsDatasets}
          </DatasetsState.Provider>
        </div>

        <button className="add-dataset-button" onClick={addDataset}>
          +
        </button>
      </div>
    </div>
  );
}

export default Settings;
