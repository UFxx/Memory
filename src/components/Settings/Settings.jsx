import React, { createContext, useState } from "react";

import CloseSettingsIconDark from "../../assets/close-settings-icon-dark-theme.png";
import CloseSettingsIconLight from "../../assets/close-settings-icon-light-theme.png";

import Dataset from "./Dataset/Dataset";

export const DatasetsState = createContext("without provider");

function Settings(props) {
  const [datasets, setDatasets] = useState([
    <Dataset
      id={-1}
      setLabels={props.setLabels}
      key={0}
      name="Заголовки"
    />,
  ]);

  function addDataset() {
    let dataset = Object.assign([], datasets);
    dataset.push(
      <Dataset
        id={dataset.length}
        values={props.values}
        setValues={props.setValues}
        key={dataset.length}
        datasets={datasets}
        setDatasets={setDatasets}
      />
    );
    setDatasets(dataset);

    let valuesCopy = Object.assign([], props.values);
    valuesCopy.push({ id: datasets.length, label: "", data: [] });
    props.setValues(valuesCopy);
    console.log(valuesCopy)
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
          <DatasetsState.Provider value={datasets}>{datasets}</DatasetsState.Provider>
        </div>

        {datasets.length < 4 && (
          <button className="add-dataset-button" onClick={addDataset}>
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default Settings;
