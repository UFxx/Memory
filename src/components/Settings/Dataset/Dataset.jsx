import LabelsForm from "../LabelsForm/LabelsForm";
import ValuesForm from "../ValuesForm/ValuesForm";

function Dataset(props) {
  return (
    <>
      <div className="datasets">
        <div className="dataset-content">
          <input
            className="dataset-title"
            type="text"
            id=""
            placeholder={`Набор ${props.id}`}
          />
          <LabelsForm setLabels={props.setLabels} />
          <ValuesForm setValues={props.setValues} />
        </div>
      </div>
    </>
  );
}

export default Dataset;
