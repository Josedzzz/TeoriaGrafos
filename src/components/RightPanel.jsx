import PropTypes from 'prop-types'
import './RightPanel.css'
import { useState } from 'react'

export function RightPanel ({ grafo }) {
    const [generalidadGrafoVisible, setGeneralidadGrafoVisible] = useState(null)
    const [tipoGrafoVisible, setTipoGrafoVisible] = useState(null)
    const [cicloEulerianoVisible, setCicloEulerianoVisible] = useState(null)
    const [cicloHamiltonianoVisible, setCicloHamiltonianoVisible] = useState(null)
    const [matrizIncidenciaVisible, setMatrizIncidenciaVisible] = useState(null)
    const [matrizAdyacenciaVisible, setMatrizAdyacenciaVisible] = useState(null)

    //Muesta el contenido de generalidades del grafo
    const handleGeneralidadClick = (contenido) => {
        if (contenido === generalidadGrafoVisible) {
            setGeneralidadGrafoVisible(null)
        } else {
            setGeneralidadGrafoVisible(contenido)
        }
    }

    //Muestra el contenido del tipo de grafo
    const handleTipoGrafoClick = (contenido) => {
        if (contenido === tipoGrafoVisible) {
            setTipoGrafoVisible(null)
        } else {
            setTipoGrafoVisible(contenido)
        }
    }

    //Muestra el contenido del ciclo euleriano
    const handleCicloEulerianoClick = (contenido) => {
        if (contenido === cicloEulerianoVisible) {
            setCicloEulerianoVisible(null)
        } else {
            setCicloEulerianoVisible(contenido)
        }
    }

    //Muestra el contenido del ciclo hamiltoniano
    const handleCicloHamiltonianoClick = (contenido) => {
        if (contenido === cicloHamiltonianoVisible) {
            setCicloHamiltonianoVisible(null)
        } else {
            setCicloHamiltonianoVisible(contenido)
        }
    }

    // Muestra el contenido de la matriz de incidencia
    const handleMatrizIncidenciaClick = (contenido) => {
        if (contenido === matrizIncidenciaVisible) {
            setMatrizIncidenciaVisible(null)
        } else {
            setMatrizIncidenciaVisible(contenido)
        }
    }

    // Muestra el contenido de la matriz de adyacencia
    const handleMatrizAdyacenciaClick = (contenido) => {
        if (contenido === matrizAdyacenciaVisible) {
            setMatrizAdyacenciaVisible(null)
        } else {
            setMatrizAdyacenciaVisible(contenido)
        }
    }

    //Renderiza contenido dependiendo de si es multigrafo o no
    const renderIsMultigrafo = () => {
        if (grafo.isMultigrafo()) {
            return 'Es multigrafo'
        } else {
            return 'No es multigrafo'
        }
    }

    //Renderiza contenido dependiendo de si es regular o no
    const renderIsRegular = () => {
        if (grafo.isRegular()) {
            return 'Es regular'
        } else {
            return 'No es regular'
        }
    }

    //Renderiza contenido dependiendo de si es conexo o no
    const renderIsConexo = () => {
        if (grafo.isConexo()) {
            return 'Es conexo'
        } else {
            return 'No es conexo'
        }
    }

    //Renderiza el numero de nodos del grafo
    const renderNumNodos = () => {
        const numNodos = grafo.getNumNodos()
        return 'El grafo tiene ' + numNodos + ' nodos'
    }

    //Renderiza el numero de aristas del grafo
    const renderNumEdges = () => {
        const numEdges = grafo.getNumEdges()
        return 'El grafo tiene ' + numEdges + ' aristas'
    }

    const renderCicloEuleriano = () => {
        const camino = grafo.getCicloEuleriano();
    
        if (camino.length === 0) {
            return 'No se puede hacer por el momento un ciclo euleriano al grafo';
        }
    
        // Procesar el resultado del ciclo euleriano
        const nodosEnCamino = camino.map(({ nombre }) => nombre).join(' -> ');
    
        return <div>{nodosEnCamino}</div>;
    };

    const renderCicloHamiltoniano = () => {
        if (!grafo || !grafo.getCicloHamiltoniano) {
            return 'No se puede calcular un ciclo Hamiltoniano para este grafo.';
        }

        const camino = grafo.getCicloHamiltoniano();
        if (camino.length === 0) {
            return 'No se encontró un ciclo Hamiltoniano en el grafo.';
        }

        // Extraer solo los nombres de los nodos del ciclo Hamiltoniano
        const nombresNodos = camino.map(nodo => nodo.nombre).join(' -> ');

        return (
            <div>{nombresNodos}</div>
        );
    };

    // Renderiza la matriz de incidencia
    const renderMatrizIncidencia = () => {
        const { matrizIncidencia, nombresNodos, nombresAristas } = grafo.calcularMatrizIncidencia()
        return (
            <table className='matriz-incidencia'>
                <thead>
                    <tr>
                        <th></th>
                        {nombresAristas.map((nombreArista, index) => (
                            <th key={index}>{nombreArista}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {matrizIncidencia.map((fila, i) => (
                        <tr key={i}>
                            <td>{nombresNodos[i]}</td>
                            {fila.map((valor, j) => (
                                <td key={j}>{valor}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    // Renderiza la matriz de adyacencia
    const renderMatrizAdyacencia = () => {
        const { matrizAdyacencia, nombresNodos } = grafo.calcularMatrizAdyacencia();
        return (
            <table className='matriz-adyacencia'>
                <thead>
                    <tr>
                        <th></th>
                        {nombresNodos.map((nombreNodo, index) => (
                            <th key={index}>{nombreNodo}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {matrizAdyacencia.map((fila, i) => (
                        <tr key={i}>
                            <td>{nombresNodos[i]}</td>
                            {fila.map((valor, j) => (
                                <td key={j}>{valor}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    
 
    return (
        <div className='right-content'>
            <h3 className='title'>Información del grafo</h3>
            <ul className='list-right'>

                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleGeneralidadClick('Generalidad grafo')}>
                        Generalidades
                    </button>
                    {generalidadGrafoVisible === 'Generalidad grafo' && (
                        <div className='info-right'>
                            {renderNumNodos()}
                            <br />
                            {renderNumEdges()}
                        </div>
                    )}
                </li>

                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleTipoGrafoClick('Tipo grafo')}>
                        Tipo de grafo
                    </button>
                    {tipoGrafoVisible === 'Tipo grafo' && (
                        <div className='info-right'>
                            {renderIsMultigrafo()}
                            <br />
                            {renderIsRegular()}
                            <br />
                            {renderIsConexo()}
                        </div>
                    )}
                </li>

                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleCicloEulerianoClick('Ciclo euleriano')}>
                        Ciclo euleriano
                    </button>
                    {cicloEulerianoVisible === 'Ciclo euleriano' && (
                        <div className='info-right'>
                            {renderCicloEuleriano()}
                        </div>
                    )}
                </li>

                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleCicloHamiltonianoClick('Ciclo hamiltoniano')}>
                        Ciclo hamiltoniano
                    </button>
                    {cicloHamiltonianoVisible === 'Ciclo hamiltoniano' && (
                        <div className='info-right'>
                            {renderCicloHamiltoniano()}
                        </div>
                    )}
                </li>

                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleMatrizAdyacenciaClick('Matriz adyacencia')}>
                        Matriz de Adyacencia
                    </button>
                    {matrizAdyacenciaVisible === 'Matriz adyacencia' && (
                        <div className='info-right'>
                            {renderMatrizAdyacencia()}
                        </div>
                    )}
                </li>
                
                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleMatrizIncidenciaClick('Matriz incidencia')}>
                        Matriz de Incidencia
                    </button>
                    {matrizIncidenciaVisible === 'Matriz incidencia' && (
                        <div className='info-right'>
                            {renderMatrizIncidencia()}
                        </div>
                    )}
                </li>

            </ul>
        </div>
    )
}

// Definir PropTypes para rightPanel
RightPanel.propTypes = {
    grafo: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
}