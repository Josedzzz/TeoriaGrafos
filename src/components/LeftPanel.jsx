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

    const renderVecinosNodos = (nombre) => {
        const vecinos = grafo.getVecinosNodo(nombre)
        if (vecinos.size === 0) return 'El nodo no tiene vecinos'
        return  'Los vecinos son: ' + [...vecinos].join(', ')
    }

    return (
        <div className='left-content'>
            <h3 className='title-nodes'>Nodos del grafo</h3>
            <ul className='list'>
                {nombresNodos.map((nombre) => (
                    <li className='item-list' key={nombre}>
                        <button className='button-list' onClick={() => handleClick(nombre)}>
                            {nombre}
                        </button>
                        {nodoSeleccionado === nombre && (
                            <div className="nodo-info">
                                Grado del nodo: {grafo.getGradoNodo(nombre)}
                                <br />
                                {renderVecinosNodos(nombre)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <h3 className='title-edges'>Aristas del grafo</h3>
            <ul className='list'>
                {nombresAristas.map((nombre) => (
                    <li className='item-list' key={nombre}>
                        <div className='edge-info'>
                            {nombre}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


// Definir PropTypes para leftPanel
LeftPanel.propTypes = {
    grafo: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
}