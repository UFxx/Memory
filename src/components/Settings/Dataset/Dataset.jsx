import LabelsForm from "../LabelsForm/LabelsForm";
import ValuesForm from "../ValuesForm/ValuesForm";

import DeleteIcon from "../../../assets/delete-icon.png";
import { useContext } from "react";
import { DatasetsState } from "../Settings";

function Dataset(props) {
  let Datasets = useContext(DatasetsState);

  function deleteDataset() {
    let datasetsCopy = Object.assign([], Datasets);
    datasetsCopy[props.id] = null;
    props.setDatasets(datasetsCopy);
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
              setValues={props.setValues}
              values={props.values}
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
