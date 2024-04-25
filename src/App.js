import React, { useState } from "react";

import OpenSettingsIcon from "./assets/open-settings-icon.png";
import DonwloadIcon from "./assets/donwload-icon.png";

import Settings from "./components/Settings/Settings";
import Buttons from "./components/Buttons/Buttons";
import Charts from "./components/Charts/Charts";
import html2canvas from "html2canvas";

function App() {
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

  function changeValue(e) {
    setRadioValue(e.target.value);
  }

  function capture() {
    const captureElem = document.querySelector("#capture");
    html2canvas(captureElem)
      .then((canvas) => {
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        return canvas;
      })
      .then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.setAttribute("download", "my-image.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
      });
  }

  return (
    <div className="content">
      <div className="chart-container" id="capture">
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
      <img
        src={DonwloadIcon}
        alt="donwload icon"
        className="donwload-icon"
        onClick={capture}
      />
      <div className="choose-chart-type">
        <Buttons changeValue={changeValue} valueState={radioValue} />
      </div>
    </div>
  );
}

export default App;
