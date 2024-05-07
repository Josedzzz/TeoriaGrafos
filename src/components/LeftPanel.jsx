import PropTypes from 'prop-types'
import './LeftPanel.css'
import { useState } from 'react'

export function LeftPanel ({ grafo }) {
    // Obtener los nombres de los nodos del grafo
    const nombresNodos = grafo.obtenerNombresNodos()

    // Obtener los nombres de las aristas del grafo
    const nombresAristas = grafo.obtenerNombresAristas()

    // Estado para mantener el nodo seleccionado y su información
    const [nodoSeleccionado, setNodoSeleccionado] = useState(null)

    // Función para manejar el clic en un nodo
    const handleClick = (nombre) => {
        if (nodoSeleccionado === nombre) {
            // Si ya está seleccionado, lo deseleccionamos
            setNodoSeleccionado(null)
        } else {
            // Si no está seleccionado, lo seleccionamos
            setNodoSeleccionado(nombre)
        }
    }

    return (
        <div className='left-content'>
            <h3 className='title-nodes'>Información de los nodos:</h3>
            <ul className='list'>
                {nombresNodos.map((nombre) => (
                    <li className='item-list' key={nombre}>
                        <button className='button-list' onClick={() => handleClick(nombre)}>
                            {nombre}
                        </button>
                        {nodoSeleccionado === nombre && (
                            <div className="nodo-info">
                                {/* Aquí debes poner la información específica del nodo */}
                                El grado del nodo es: {grafo.getGradoNodo(nombre)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <h3>Nombres de Aristas:</h3>
            <ul>
                {nombresAristas.map((nombre) => (
                    <li key={nombre}>{nombre}</li>
                ))}
            </ul>
        </div>
    )
}


// Definir PropTypes para leftPanel
LeftPanel.propTypes = {
    grafo: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
}