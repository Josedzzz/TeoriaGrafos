import { useState } from 'react'
import './LeftTreePanel.css'
import PropTypes from 'prop-types'

export function LeftTreePanel ({ arbol }) {
    //Obtiene los valores de los nodos del arbol
    const valoresNodos = arbol.getListaValores()
    
    //Estado para mantener un nodo seleccionado y mostrar su información
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

    const renderTipoNodo = (valor) => {
        const isRaiz = arbol.isRaiz(valor)  
        const isRama = arbol.isRama(valor)
        const isHoja = arbol.isHoja(valor)

        if (isRaiz) {
            return 'El nodo es la raíz del árbol'
        } else if (isRama) {
            return 'El nodo es una rama del árbol'
        } else if (isHoja) {
            return 'El nodo es una hoja del árbol'
        } else {
            return ''
        }

    }

    return (
        <div className='left-content'>
            <h3 className='title-nodes'>Nodos del árbol</h3>
            <ul className='list'>
                {valoresNodos.map((nombre) => (
                    <li className='item-list' key={nombre}>
                        <button className='button-list' onClick={() => handleClick(nombre)}>
                            {nombre}
                        </button>
                        {nodoSeleccionado === nombre && (
                            <div className="nodo-info">
                                {renderTipoNodo(nodoSeleccionado)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

LeftTreePanel.propTypes = {
    arbol: PropTypes.object.isRequired, // arbol debe ser un objeto requerido
}