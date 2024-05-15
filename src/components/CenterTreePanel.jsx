import './CenterTreePanel.css'
import { useState } from 'react'
import { Square } from './Square'

const BOARD_WIDTH = 142
const BOARD_HEIGHT = 84
const BOARD_ARRAY = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null))

export function CenterTreePanel () {
    const [board, setBoard] = useState(BOARD_ARRAY)

    //Funcion para resetear el tablero
    const resetBoard = () => {
        setBoard(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null)))
    }

    const updateBoard = (i, j, nodeName) => {
        
    }

    return (
        <div className='draw-template'>
            <div className='board'>
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