import './CenterPanel.css'
import { useState } from 'react'
import { Square } from './Square'
import { Grafo } from '../model/Grafo';

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

const grafo = new Grafo();

export function CenterPanel () {
    const [board, setBoard] = useState(BOARD_ARRAY);
    
    const resetBoard = () => {
        setBoard(BOARD_ARRAY)
        grafo.nodos.clear(); 
        grafo.aristas = [];
    }

    const updateBoard = (i, j, nodeName) => {
        // Agregar nodo al grafo
        if (!grafo.existeNodo(nodeName)) {
            grafo.addNodo(nodeName, i, j);        

            const newBoard = [...board];
            newBoard[i][j] = nodeName;
            setBoard(newBoard);
            // Agregar nodo al grafo
            grafo.addNodo(nodeName, i, j);
        } else {
            alert('El nombre del nodo ya existe')
        }
    }

    const findShortestPath = (startNode, endNode) => {
        // Implementa la lógica para encontrar la ruta más corta entre startNode y endNode.
        // Por ahora, simplemente devuelve una ruta de prueba.
        return [[3, 5], [4, 5], [5, 5], [6, 5], [7, 5]]; // Ruta de prueba
    }

    const createEdge = () => {
        const node1Name = prompt('Ingrese el nombre del nodo 1:');
        const node2Name = prompt('Ingrese el nombre del nodo 2:');
        
        if (node1Name && node2Name) {
            const path = findShortestPath(node1Name, node2Name);
            if (path.length > 0) {
                const newBoard = [...board];
                path.forEach(([x, y]) => {
                    newBoard[x][y] = '*';
                });
                setBoard(newBoard);
            } else {
                alert('No se encontró una ruta entre los nodos.');
            }
        }
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
                <button onClick={createEdge}>Ingresar Arista</button>
            </div>
        </div>
    )
}