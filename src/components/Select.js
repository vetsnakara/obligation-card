import React from "react";

export const Select = ({ options = [], selectedValue, onSelect }) => {
  const handleSelect = ({ target: { value } }) => {
    onSelect(value);
  };

  return (
    <select onChange={handleSelect} value={selectedValue} className="select">
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};
