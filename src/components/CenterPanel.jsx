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
        setBoard(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null)));
        grafo.nodos.clear() 
        grafo.aristas = []
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


    const createEdge = () => {
        const node1Name = prompt('Ingrese el nombre del nodo 1:');
        const node2Name = prompt('Ingrese el nombre del nodo 2:');
        
        const node1 = grafo.getNodeByName(node1Name)
        const node2 = grafo.getNodeByName(node2Name)
        if (node1 && node2) {
            alert('Por el momento bien')
            // Encontrar el camino entre los nodos
            const camino = grafo.encontrarCaminoEntreNodos(node1, node2);
            grafo.addArista(node1, node2, camino)
            // Actualizar el tablero con asteriscos para representar el camino
            const newBoard = [...board];
            camino.forEach(({ i, j }) => {
                newBoard[i][j] = '*';
            });
            setBoard(newBoard);
        } else {
            alert('Verifique que el nombre del nodo exista')
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