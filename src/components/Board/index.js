import React from "react";
import './style.css';

import Square from '../Square';
import { calculateWinner } from '../../helpers';

const Board = (props) => {
    const handleClick = (i) => {
        if (calculateWinner(props.squares) || props.squares[i]) {
            return;
        }

        const nextSquares = props.squares.slice();
        if (props.xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        props.onPlay(nextSquares);
    }
    
    const makeStatusText = () => {
        const winner = calculateWinner(props.squares);
        if (winner) 
            return 'Winner: ' + winner;
        
        for (let i = 0; i < props.squares.length; i++) {
            if (props.squares[i] === null) {
                return 'Next player: ' + (props.xIsNext ? 'X' : 'O');
            }
        }
        
        return 'Game was drawn';
    }
      
      
  
    return (
      <>
        <div className="status">{ makeStatusText() }</div>
        {/* <div className="board-row">
          <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} />
        </div> */}
        {
          Array(3).fill(null).map((_, row) => {
            return (
              <div key={row} className="board-row">
                {
                  Array(3).fill(null).map((_, col) => {
                    const index = row *3 + col;
                    return (<Square key={index} value={props.squares[index]} onSquareClick={() => handleClick(index)} />);
                  })
                }
              </div>
            )
          })
        }
      </>
    );
}

export default Board;