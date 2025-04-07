import React from "react";

function Food({ x, y, food }) {
  return food.x === x && food.y === y ? <div className="food"></div> : null;
}

export default Food;
