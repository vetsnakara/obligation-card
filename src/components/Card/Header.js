import React from "react";

export const Header = ({ data }) => {
  if (!data) return null;

  return (
    <header className="card__header">
      <div className="card__header-top">
        <h2 className="card__title">
          {data.title} {data.rating}
        </h2>
        <span>{data.code}</span>
      </div>
      <div className="card__header-bottom">{data.address}</div>
    </header>
  );
};
