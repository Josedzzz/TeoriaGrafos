import './CenterPanel.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Square } from './Square'
import { Grafo } from '../model/Grafo'

const BOARD_WIDTH = 34
const BOARD_HEIGHT = 28
const BOARD_ARRAY = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null))

export function CenterPanel({ grafo, actualizarGrafo }) {
    const [board, setBoard] = useState(BOARD_ARRAY)

    const resetBoard = () => {
        setBoard(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null)))
        grafo.nodos.clear()
        grafo.aristas = []
        actualizarGrafo(new Grafo()) // Opcional: reiniciar el grafo en App
    }

    const updateBoard = (i, j, nodeName) => {
        // Verificar si ya hay un nodo en la posición i, j
        const existingNode = getNodeAtPosition(i, j)
        if (existingNode) {
            alert('Ya existe un nodo en esta posición')
            return
        }
        // Verificar si la posición i, j está ocupada por una arista
        if (isEdgePosition(i, j)) {
            alert('No se puede colocar un nodo en medio de una arista')
            return
        }
        // Agregar nodo al grafo si no existe previamente
        if (!grafo.existeNodo(nodeName)) {
            grafo.addNodo(nodeName, i, j)
            actualizarGrafo(grafo)
            const newBoard = [...board]
            newBoard[i][j] = nodeName
            setBoard(newBoard)
        } else {
            alert('El nombre del nodo ya existe')
        }
    }

    const getNodeAtPosition = (i, j) => {
        for (const nodo of grafo.nodos) {
            if (nodo.posicionI === i && nodo.posicionJ === j) {
                return nodo
            }
        }
        return null
    }

    const isEdgePosition = (i, j) => {
        for (const arista of grafo.aristas) {
            const { nodoInicio, nodoFin, camino } = arista
            for (const { i: ai, j: aj } of camino) {
                if (ai === i && aj === j) {
                    return true
                }
            }
        }
        return false
    }

    const createEdge = () => {
        const node1Name = prompt('Ingrese el nombre del nodo 1:')
        const node2Name = prompt('Ingrese el nombre del nodo 2:')
        const node1 = grafo.getNodeByName(node1Name)
        const node2 = grafo.getNodeByName(node2Name)
        if (node1 && node2) {
            alert('Por el momento bien')
            const camino = grafo.encontrarCaminoEntreNodos(node1, node2)
            grafo.addArista(node1, node2, camino)
            const newBoard = [...board]
            camino.forEach(({ i, j }) => {
                newBoard[i][j] = '*'
            })
            setBoard(newBoard)
            actualizarGrafo(grafo)
        } else {
            alert('Verifique que el nombre del nodo exista')
        }
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
                <button onClick={createEdge}>Ingresar Arista</button>
            </div>
        </div>
    )
}

// Definir PropTypes para CenterPanel
CenterPanel.propTypes = {
    grafo: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
    actualizarGrafo: PropTypes.func.isRequired // setGrafo debe ser una función requerida
}