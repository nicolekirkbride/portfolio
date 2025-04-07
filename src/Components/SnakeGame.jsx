import React, { useState, useEffect } from "react";
import Board from "./SnakeBoard";
import "./Styles/SnakeGame.css";

const gridSize = 20;

function snakeGame() {
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState({ x: 0, y: 1 });

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prev) => {
        let newSnake = [...prev];
        let head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;
        newSnake.unshift(head);
        newSnake.pop();

        if (head.x === food.x && head.y === food.y) {
          newFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
          newSnake.push({});
        }
        return newSnake;
      });
    };
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [direction, food]);

  return (
    <div className="game-container">
      <Board snake={snake} food={food} />
    </div>
  );
}
