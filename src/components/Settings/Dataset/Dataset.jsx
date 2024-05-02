import LabelsForm from "../LabelsForm/LabelsForm";
import ValuesForm from "../ValuesForm/ValuesForm";

import DeleteIcon from "../../../assets/delete-icon.png";
import { useContext } from "react";
import { DatasetsState } from "../Settings";
import { ValuesState } from "../../../App";

function Dataset(props) {
  const Datasets = useContext(DatasetsState);
  const Values = useContext(ValuesState);

  function deleteDataset() {
    let datasetsCopy = Object.assign([], Datasets);
    datasetsCopy.splice(props.id, 1);
    props.setSettingsDatasets(datasetsCopy);

    let valuesCopy = Object.assign([], Values);
    valuesCopy.splice(props.id - 1, 1);
    props.setDatasets(valuesCopy);
  }

  return (
    <>
      <div className="dataset-content">
        <input
          className="dataset-title"
          type="text"
          value={props.id === -1 ? "Заголовки" : null}
          placeholder={`Набор ${props.id}`}
        />
        {props.id === -1 && <LabelsForm setLabels={props.setLabels} />}
        {props.id !== -1 && (
          <>
            <ValuesForm
              setDatasets={props.setDatasets}
              datasets={props.datasets}
              id={props.id}
            />
            <img
              src={DeleteIcon}
              alt="Delete dataset icon"
              className="delete-dataset-icon"
              onClick={deleteDataset}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Dataset;
