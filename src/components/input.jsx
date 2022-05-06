import * as React from "react";
import "./input.css";

const Input = ({
  id,
  label,
  required,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
}) => {
  const handleInputChange = (event) => {
    onChange(id, event.target.value);
  };

  const handleInputBlur = (event) => {
    if (onBlur) {
      onBlur(id, event.target.value);
    }
  };

  return (
    <div className="Input-container">
      <label htmlFor={id}>{`${label}${required ? " (Required)" : ""}`}</label>
      <input
        type="text"
        name={id}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <div>{error}</div>
    </div>
  );
};

export { Input };
