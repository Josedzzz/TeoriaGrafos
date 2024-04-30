import './CenterPanel.css'
import { useState } from 'react'
import { Square } from './Square'

const BOARD_WIDTH = 34;
const BOARD_HEIGHT = 28;
const BOARD_ARRAY = Array(BOARD_WIDTH * BOARD_HEIGHT).fill(null);

export function CenterPanel () {
    const [board, setBoard] = useState(BOARD_ARRAY);
    
    const resetBoard = () => {
        setBoard(BOARD_ARRAY)
    }

    const updateBoard = (i, j, nodeName) => {
        const index = i * BOARD_WIDTH + j;
        const newBoard = [...board];
        newBoard[index] = nodeName;
        setBoard(newBoard);
    };

    return (
        <div className='draw-template'>
            <div className='board' >
                {Array.from({ length: BOARD_HEIGHT }, (_, i) => (
                    Array.from({ length: BOARD_WIDTH }, (_, j) => (
                        <Square key={i * BOARD_WIDTH + j} i={i} j={j} updateBoard={updateBoard}>
                            {board[i * BOARD_WIDTH + j]}
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