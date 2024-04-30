import './CenterPanel.css'
import { useState } from 'react'
import { Square } from './Square'

export function CenterPanel () {
    const [board, setBoard] = useState(Array(644).fill(null))
    
    const resetBoard = () => {
        setBoard(Array(644).fill(null))
    }

    const updateBoard = (index, nodeName) => {
        if (board[index]) return
        //Actualizo el tablero en donde se hizo click
        const newBoard = [...board]
        newBoard[index] = nodeName
        setBoard(newBoard)
    }

    return (
        <div className='draw-template'>
            <div className='board' >
                {
                    board.map((square, index) => {
                        return (
                            <Square key={index} index={index} updateBoard={updateBoard}>
                                {square}
                            </Square>
                        )
                    })
                }
            </div>
            <div className='button-area'>
                <button onClick={resetBoard}>Limpiar tablero</button>
                <button>Ingresar Arista</button>
            </div>
        </div>
    )
}