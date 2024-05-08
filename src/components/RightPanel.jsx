import PropTypes from 'prop-types'
import './RightPanel.css'
import { useState } from 'react'

export function RightPanel ({ grafo }) {
    const [generalidadGrafoVisible, setGeneralidadGrafoVisible] = useState(null)
    const [tipoGrafoVisible, setTipoGrafoVisible] = useState(null)
    const [cicloEulerianoVisible, setCicloEulerianoVisible] = useState(null)
    const [cicloHamiltonianoVisible, setCicloHamiltonianoVisible] = useState(null)

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
                            Otro ejemplo de contenido
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
                            Ejemplo de contenido para el ciclo eulerinao
                        </div>
                    )}
                </li>

                <li className='item-list-right'>
                    <button className='button-list-right' onClick={() => handleCicloHamiltonianoClick('Ciclo hamiltoniano')}>
                        Ciclo hamiltoniano
                    </button>
                    {cicloHamiltonianoVisible === 'Ciclo hamiltoniano' && (
                        <div className='info-right'>
                            Ejemplo de contenido para el ciclo hamiltoniano
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