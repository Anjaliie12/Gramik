import React from "react";

const weights = ["1 litre", "115 ml", "515 ml", "400 ml", "250 ml", "100 gm", "500 gm"];

const Sidebar = ({ selectedWeights = [], onWeightChange }) => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li><strong>Herbicide</strong></li>
        <li>Chemical</li>
        <li>Organic</li>
      </ul>

      <h3>Filter by Weight</h3>
      {weights.map((weight) => (
        <div key={weight}>
          <input
            type="checkbox"
            checked={selectedWeights.includes(weight)}
            onChange={() => onWeightChange(weight)}
          />
          <label>{weight}</label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
