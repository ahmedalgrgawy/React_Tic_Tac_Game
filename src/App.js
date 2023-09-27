import "./App.css";
import React, { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Components/Patterns";


function App() {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  const [player, setPlayer] = useState('O');

  const [result, setResult] = useState({ winner: 'none', state: "none" });

  useEffect(() => {

    checkWin();

    checkDraw();

    if (player == 'X') {

      setPlayer("O")

    } else {

      setPlayer("X")

    }
  }, [board]);


  useEffect(() => {
    if (result.state != 'none') {

      alert(`Winner Is ${result.winner}`);
      restartGame();
    }
  }, [result]);


  const changeSquare = (square) => {
    setBoard(
      board.map((value, index) => {

        if (index == square && value == '') {

          return player;

        }

        return value;

      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((current) => {

      const firstPlayer = board[current[0]];

      if (firstPlayer == "") return;

      let WinningStatue = true;

      current.forEach((index) => {
        if (board[index] != firstPlayer) {
          WinningStatue = false;
        }
      });
      if (WinningStatue) {
        setResult({
          winner: player, state: "Won"
        })
      }
    })
  }

  const checkDraw = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == '') {
        filled = false;
      }
    })
    if (filled) {
      setResult({ winner: "No One", state: "Draw" })
    }
  }

  const restartGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('O');
  }

  return (

    <div className="App">

      <div className="board">
        <div className="row">
          <Square value={board[0]} chooserSquare={() => changeSquare(0)} />
          <Square value={board[1]} chooserSquare={() => changeSquare(1)} />
          <Square value={board[2]} chooserSquare={() => changeSquare(2)} />
        </div>
        <div className="row">
          <Square value={board[3]} chooserSquare={() => changeSquare(3)} />
          <Square value={board[4]} chooserSquare={() => changeSquare(4)} />
          <Square value={board[5]} chooserSquare={() => changeSquare(5)} />
        </div>
        <div className="row">
          <Square value={board[6]} chooserSquare={() => changeSquare(6)} />
          <Square value={board[7]} chooserSquare={() => changeSquare(7)} />
          <Square value={board[8]} chooserSquare={() => changeSquare(8)} />
        </div>
      </div>

    </div>

  )
}

export default App;
