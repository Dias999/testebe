import React from "react";
import "./styles.css";

const Input: React.FC<Input.Props> = ({
  type,
  name,
  value,
  placeholder,
  ariaLabel,
  onChange,
  handleBlur,
  error,
}) => {
  return (
    <div className="input-group flex-column">
      <input
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        maxLength={20}
      />
      <div className="error-label">{error}</div>
    </div>
  );
};

export default Input;
