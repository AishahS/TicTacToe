import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto",
  color: "white",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );
  {
    /* When you click on the button it mark it played */
  }

  return (
    <>
      <div style={{ ...styles, fontSize: 30, textAlign: "center" }}>
        <p>Tic Tac Toe</p>
      </div>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {/* Reders the text at the button of the game */}
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
