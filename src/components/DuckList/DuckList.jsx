import React from "react";

import data from "../../utils/data";
import DuckCard from "../DuckCard/DuckCard";

import "./DuckList.css";

function DuckList() {
  const { ducks } = data;

  return (
    <div className="duck-list">
      {ducks.map((duck) => {
        return <DuckCard key={duck.id} duck={duck} />;
      })}
    </div>
  );
}

export default DuckList;
