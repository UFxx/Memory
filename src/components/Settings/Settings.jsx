import React from "react";

import CloseSettingsIconDark from "../../assets/close-settings-icon-dark-theme.png";
import CloseSettingsIconLight from "../../assets/close-settings-icon-light-theme.png";

import LabelsForm from "./LabelsForm/LabelsForm";
import ValuesForm from "./ValuesForm/ValuesForm";

function Settings(props) {
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
        <LabelsForm setLabels={props.setLabels} />
        <ValuesForm setValues={props.setValues} />
      </div>
    </div>
  );
}

export default Settings;
