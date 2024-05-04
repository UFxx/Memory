import RadioButton from "./RadioButton/RadioButton";

function Buttons(props) {
  return (
    <>
      {/* The name of the chart must begin with a small letter (name i mean chart type) */}
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="pie"
        value="1"
      />
      <RadioButton changeRadioValue={props.changeRadioValue} valueState={props.valueState} name="bar" value="2"
      />
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="doughnut"
        value="3"
      />
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="line"
        value="4"
      />
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="bubble"
        value="5"
      />
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="polararea"
        value="6"
      />
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="radar"
        value="7"
      />
      <RadioButton
        changeRadioValue={props.changeRadioValue}
        valueState={props.valueState}
        name="scatter"
        value="8"
      />
    </>
  );
}
export default Buttons;
