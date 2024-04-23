import RadioButton from "./RadioButton/RadioButton";

function Buttons(props) {
  return (
    <>
      {/* The name of the chart must begin with a small letter (name i mean chart type) */}
      <RadioButton
        changeValue={props.changeValue}
        valueState={props.valueState}
        name="pie"
        value="1"
      />
      <RadioButton
        changeValue={props.changeValue}
        valueState={props.valueState}
        name="bar"
        value="2"
      />
      <RadioButton
        changeValue={props.changeValue}
        valueState={props.valueState}
        name="doughnut"
        value="3"
      />
    </>
  );
}
export default Buttons;
