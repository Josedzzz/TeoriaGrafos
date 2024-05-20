import './CenterTreePanel.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { SquareTree } from './SquareTree'
import { Tree } from '../model/Tree'

const BOARD_WIDTH = 142
const BOARD_HEIGHT = 84
const BOARD_ARRAY = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null))

export function CenterTreePanel ({ arbol, actualizarArbol }) {
    const [board, setBoard] = useState(BOARD_ARRAY)

    // Reinicia el tablero cada vez que el componente se monta
    useEffect(() => {
        resetBoard()
    }, [])

    //Funcion para resetear el tablero
    const resetBoard = () => {
        setBoard(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null)))
        actualizarArbol(new Tree())
    }

    //Agrega un nodo al arbol
    const updateBoard = (i, j) => {
        if (arbol.getRaiz() === null) {
            const valor = prompt('Ingrese el valor de la raiz:')
            arbol.addRaiz(valor, i, j)
            //Pintamos el nodo
            const newBoard = [...board]
            newBoard[i][j] = valor
            newBoard[i-1][j-1] = '-'
            newBoard[i-1][j] = '-'
            newBoard[i-1][j+1] = '-'
            newBoard[i][j-1] = '-'
            newBoard[i][j+1] = '-'
            newBoard[i+1][j-1] = '-'
            newBoard[i+1][j] = '-'
            newBoard[i+1][j+1] = '-'
            setBoard(newBoard)
            actualizarArbol(arbol)
        } else {
            const valor = prompt('Ingrese el valor del nodo:')
            const padre = prompt('Ingrese el padre del nodo:')
            if (!arbol.existeValor(valor) && arbol.existeValor(padre)) {
                const nodePadre = arbol.getNode(padre)
                const camino = arbol.encontrarCaminoEntreNodos(nodePadre, i, j)
                arbol.addHijo(padre, valor, i, j)
                //Pintamos el nodo
                const newBoard = [...board]
                newBoard[i][j] = valor
                newBoard[i-1][j-1] = '-'
                newBoard[i-1][j] = '-'
                newBoard[i-1][j+1] = '-'
                newBoard[i][j-1] = '-'
                newBoard[i][j+1] = '-'
                newBoard[i+1][j-1] = '-'
                newBoard[i+1][j] = '-'
                newBoard[i+1][j+1] = '-'
                //Pintamos el camino
                camino.forEach(({ i, j }) => {
                    newBoard[i][j] = '*'
                })
                setBoard(newBoard)
                actualizarArbol(arbol)
            } else {
                alert('Verifique que el valor del nodo no esté repetido o que el padre de este si exista')
            }
        }

    }

    return (
        <div className='draw-template'>
            <div className='board'>
                {Array.from({ length: BOARD_HEIGHT }, (_, i) => (
                    Array.from({ length: BOARD_WIDTH }, (_, j) => (
                        <SquareTree key={j} i={i} j={j} updateBoard={updateBoard}>
                            {board[i][j]}
                        </SquareTree>
                    ))
                ))}
            </div>
            <div className='button-area'>
                <button onClick={resetBoard}>Limpiar tablero</button>
            </div>
        </div>
    )
}

CenterTreePanel.propTypes = {
    arbol: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
    actualizarArbol: PropTypes.func.isRequired // setGrafo debe ser una función requerida
}