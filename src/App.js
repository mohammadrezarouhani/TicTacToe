/** @format */

import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0

  function onPlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1);
  }


  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  return (
    <div className="App">
      <div className="Container">
        <Board squares={currentSquares} xIsNext={xIsNext} handlePlay={onPlay} />
        <History hisories={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}

export default App;
