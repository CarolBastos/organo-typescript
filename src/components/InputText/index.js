import "./InputText.css";

const InputText = (props) => {
  const placeholderModifier = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onChanged(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyped}
        required={props.required}
        placeholder={placeholderModifier}
      ></input>
    </div>
  );
};

export default InputText;
