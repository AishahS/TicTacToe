import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid black",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={{ paddingTop: "20vh" }}>
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;
