import React, { useState } from "react";
import { connect } from "react-redux";
import { resetState } from "./store/actions";

import { Card } from "./components/Card";

const isins = ["RU000A0JU4L3", "XS0971721963"];

const App = ({ dispatch }) => {
  const [isin, setIsin] = useState(isins[0]);

  const handleIsinChange = isin => {
    dispatch(resetState());
    setIsin(isin);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "20px auto 0"
      }}
    >
      <nav style={{ marginBottom: 10 }}>
        {isins.map(id => (
          <button
            key={id}
            style={{
              marginRight: 5,
              outline: id === isin ? "2px solid orangered" : ""
            }}
            onClick={() => handleIsinChange(id)}
          >
            {isin}
          </button>
        ))}
      </nav>

      <Card isin={isin} />
    </div>
  );
};

const ConnectedApp = connect()(App);

export { ConnectedApp as App };
