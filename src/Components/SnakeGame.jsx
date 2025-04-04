import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./SnakeGame.css";

const gridSize = 20;

function snakeGame() {
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState({ x: 0, y: 1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

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
    const moveSnake = () => {};
  });
}
