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
            value={props.id === -1 ? "Заголовки" : null}
            placeholder={`Набор ${props.id}`}
          />
          {props.id === -1 ? <LabelsForm setLabels={props.setLabels} /> : null}
          {props.id === -1 ? null : (
            <ValuesForm
              setValues={props.setValues}
              values={props.values}
              id={props.id}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Dataset;
