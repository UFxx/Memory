import React, { createContext, useState } from "react";

import CloseSettingsIconDark from "../../assets/close-settings-icon-dark-theme.png";
import CloseSettingsIconLight from "../../assets/close-settings-icon-light-theme.png";

import Dataset from "./Dataset/Dataset";

export const DatasetsState = createContext("without provider");

function Settings(props) {
  const [settingsDatasets, setSettingsDatasets] = useState([
    
    <Dataset id={-1} setLabels={props.setLabels} key={0} name="Заголовки" />,
  ]);

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

    let valuesCopy = Object.assign([], props.datasets);
    valuesCopy.push({ id: settingsDatasets.length, label: "", data: [] });
    props.setDatasets(valuesCopy);
  }
  return (
    <div className={`chart-settings__${props.open ? "open" : "hidden"}`}>
      <div className="settings-content">
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
