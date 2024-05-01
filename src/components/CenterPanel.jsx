import './CenterPanel.css'
import { useState } from 'react'
import { Square } from './Square'

const BOARD_WIDTH = 34;
const BOARD_HEIGHT = 28;
const BOARD_ARRAY = [];
for (let i = 0; i < BOARD_HEIGHT; i++) {
    const row = [];
    for (let j = 0; j < BOARD_WIDTH; j++) {
        row.push(null);
    }
    BOARD_ARRAY.push(row);
}

export function CenterPanel () {
    const [board, setBoard] = useState(BOARD_ARRAY);
    
    const resetBoard = () => {
        setBoard(BOARD_ARRAY)
    }

    const updateBoard = (i, j, nodeName) => {
        //const index = i * BOARD_WIDTH + j;
        const newBoard = [...board];
        newBoard[i][j] = nodeName;
        setBoard(newBoard);
    }

    return (
        <div className='draw-template'>
            <div className='board' >
                {Array.from({ length: BOARD_HEIGHT }, (_, i) => (
                    Array.from({ length: BOARD_WIDTH }, (_, j) => (
                        <Square key={j} i={i} j={j} updateBoard={updateBoard}>
                            {board[i][j]}
                        </Square>
                    ))
                ))}
            </div>
            <div className='button-area'>
                <button onClick={resetBoard}>Limpiar tablero</button>
                <button>Ingresar Arista</button>
            </div>
        </div>
    )
}