function RadioButton(props) {
  return (
    <>
      <input
        type="radio"
        name="chart-type"
        id={`radio-${props.name}`}
        value={props.value}
        checked={props.valueState === props.value ? true : false}
        onChange={props.changeValue}
      />
      <label htmlFor={`radio-${props.name}`}>{props.name}</label>
    </>
  );
}

export default RadioButton;
