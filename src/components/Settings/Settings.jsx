import React from "react";

import CloseSettingsIcon from "../../assets/close-settings-icon.webp";

import LabelsForm from "./LabelsForm/LabelsForm";
import ValuesForm from "./ValuesForm/ValuesForm";

function Settings(props) {
  return (
    <div className={`chart-settings__${props.open ? "open" : "hidden"}`}>
      <div className="settings-content">
        <img
          src={CloseSettingsIcon}
          alt="close settings icon"
          className="settings-close-button"
          onClick={props.changeSettingsOpen}
        />
        <LabelsForm setLabels={props.setLabels} />
        <ValuesForm setValues = {props.setValues} />
      </div>
    </div>
  );
}

export default Settings;
