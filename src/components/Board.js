/** @format */

import React, { useState } from "react";
import "./styles/board.css";
import Square from "./Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    
    function handleClick(index) {
        console.log(index)
        const nextArray = squares.slice()
        nextArray[index] = 'X'
        setSquares(nextArray)
    }

    const squareList = squares.map((item, index) => {
        return (
            <Square key={index} value={squares[index]} onClick={() => handleClick(index)} />
        )
    })

    return (
        <div className="board">
            {squareList}
        </div>
    );
}
