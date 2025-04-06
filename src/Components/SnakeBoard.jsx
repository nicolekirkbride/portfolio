import React from "react";
import Snake from "./Snake";
import Food from "./SnakeFood";

const gridSize = 20;

function Board({ snake, food }) {
  return (
    <div className="game-board">
      {Array.from({ length: gridSize }).map((_, y) =>
        Array.from({ length: gridSize }).map((_, x) => (
          <div key={`${x}-${y}`} className="cell">
            <Snake x={x} y={y} snake={snake} />
            <Food x={x} y={y} food={food} />
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
