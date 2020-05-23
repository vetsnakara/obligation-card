import React from "react";
import { Button } from "./Button";

export const ButtonGroup = ({ options = [], selectedId, onSelect }) => (
  <div>
    {options.map(({ id, text }) => {
      const isActive = id === selectedId;
      const className = isActive ? "active" : "";

      return (
        <Button
          key={text}
          className={className}
          onClick={() => onSelect(id)}
          disabled={isActive}
        >
          {text}
        </Button>
      );
    })}
  </div>
);
