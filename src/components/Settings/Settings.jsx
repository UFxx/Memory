import CloseSettingsIcon from "../../assets/close-settings-icon.webp";

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
        <div className="columns-inputs">
          <input type="text" name="" id="" placeholder="Название столбца 1" />
          <input type="text" name="" id="" placeholder="Название столбца 2" />
          <input type="text" name="" id="" placeholder="Название столбца 3" />
          <input type="text" name="" id="" placeholder="Название столбца 4" />
          <input type="text" name="" id="" placeholder="Название столбца 5" />
          <input type="text" name="" id="" placeholder="Название столбца 6" />
        </div>
        <div className="values-inputs">
          <input type="text" name="" id="" placeholder="Значение столбца 1" />
          <input type="text" name="" id="" placeholder="Значение столбца 2" />
          <input type="text" name="" id="" placeholder="Значение столбца 3" />
          <input type="text" name="" id="" placeholder="Значение столбца 4" />
          <input type="text" name="" id="" placeholder="Значение столбца 5" />
          <input type="text" name="" id="" placeholder="Значение столбца 6" />
        </div>
      </div>
    </div>
  );
}

export default Settings;
