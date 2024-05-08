import React from "react";

import Board from "../../components/Board";
import { useState } from "react";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);  

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const onClickButton = () => {
        setCurrentMove(0);
        setHistory([Array(9).fill(null)]);
    }
    console.log(onClickButton);

    return (
      <div className="game">
        <div className="game-board">
            <Board xIsNext={currentMove % 2 === 0} squares={ history[currentMove] } onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>
                <li>
                    <button onClick={onClickButton}>Reset</button>
                </li>
                <li>
                    {
                        currentMove > 0 &&
                            <button onClick={() => setCurrentMove(currentMove - 1)}>Back</button>
                    }
                </li>
                <li>
                    {
                        currentMove < history.length - 1 &&
                            <button onClick={() => setCurrentMove(currentMove + 1)}>Forward</button>
                    }
                </li>
            </ol>
        </div>
      </div>
    );
}

export default Game;