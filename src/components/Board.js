/** @format */

import "./styles/board.css";
import Square from "./Square";

export default function Board({squares,xIsNext,handlePlay}) {


    function handleClick(index) {
        console.log(index)
        if (squares[index] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice()
        
        if (xIsNext) {
            nextSquares[index] = 'X'
        } else {
            nextSquares[index] = 'O'
        }

        handlePlay(nextSquares)
    }

    const winner = calculateWinner(squares) 
    let status;

    if (winner) {
        status = "The Winner Is: " + winner
    } else {
        status = "Next player: " + (xIsNext ? 'X' : 'O')
    }

    const squareList = squares.map((item, index) => {
        return (
            <Square key={index} value={item} onClick={() => handleClick(index)} />
        )
    })

    return (
        <div className="boardContainer">  
            <div>{status}</div>
            <div className="board">
                {squareList}
            </div>
        </div>
    );
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}