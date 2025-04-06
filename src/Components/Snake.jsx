import React from "react";

function Snake({ x, y, snake }) {
  const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
  return isSnake ? <div className="snake"></div> : null;
}

export default Snake;
