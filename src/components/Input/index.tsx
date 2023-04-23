import React from "react";
import "./Input.css";

interface InputProps {
  onChanged: (value: string) => void;
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
  type?: "number" | "text" | "date" | "password" | "email" | "color";
}

const Input = ({
  onChanged,
  placeholder,
  label,
  value,
  type = "text",
  required = false,
}: InputProps) => {
  const placeholderModifier = `${placeholder}...`;

  const onTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanged(event.target.value);
  };

  return (
    <div className={`input input-${type}`}>
      <label>{label}</label>
      <input
        value={value}
        onChange={onTyped}
        required={required}
        placeholder={placeholderModifier}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
