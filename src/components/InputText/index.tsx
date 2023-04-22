import React from "react";
import "./InputText.css";

interface InputTextProps {
  onChanged: (value: string) => void;
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
}

const InputText = ({
  onChanged,
  placeholder,
  label,
  value,
  required = false,
}: InputTextProps) => {
  const placeholderModifier = `${placeholder}...`;

  const onTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanged(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{label}</label>
      <input
        value={value}
        onChange={onTyped}
        required={required}
        placeholder={placeholderModifier}
      ></input>
    </div>
  );
};

export default InputText;
