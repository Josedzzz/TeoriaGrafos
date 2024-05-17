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

    //Funcion para renderizar el tipo de nodo
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

    //Funcion para renderizar el padre de un nodo
    const renderParentNodo = (valor) => {
        const parentNode = arbol.getParent(valor)
        if (parentNode === null) {
            return 'El nodo no tiene un padre'
        } else {
            return 'El padre del nodo es: ' + parentNode.getValor()
        }
    }

    //Funcion para renderizar los hijos de un nodo
    const renderHijosNodo = (valor) => {
        const hijosNodo = arbol.getHijos(valor)
        if (hijosNodo === null || hijosNodo.length === 0) {
            return 'El nodo no tiene hijos'
        }
        const hijosValores = hijosNodo.map(hijo => hijo.getValor())
        return `Hijos del nodo: ${hijosValores.join(", ")}`
    }

    //Funcion para renderizar los hermanos de un nodo
    const renderHermanosNodo = (valor) => {
        const hermanosNodo = arbol.getHermanos(valor)
        if (hermanosNodo === null || hermanosNodo.length === 0) {
            return 'El nodo no tiene hermanos'
        }
        const hermanosValores = hermanosNodo.map(hermano => hermano.getValor())
        return `Hermanos del nodo: ${hermanosValores.join(", ")}`
    }

    //Funcion para renderizar los descendientes de un nodo
    const renderDescendientes = (valor) => {
        const descendienteNodo = arbol.getDescendientes(valor)
        if (descendienteNodo === null || descendienteNodo.length === 0) {
            return 'El nodo no tiene descendientes'
        }
        const descendientesValores = descendienteNodo.map(descendiente => descendiente.getValor())
        return `Descendientes del nodo: ${descendientesValores.join(", ")}`
    }

    //Funcion para renderizar los ancestros de un nodo
    const renderAncestros = (valor) => {
        const ancestrosNodo = arbol.getAncestros(valor)
        if (ancestrosNodo === null || ancestrosNodo.length === 0) {
            return 'El nodo no tiene ancestros'
        }
        const ancestrosValores = ancestrosNodo.map(ancestro => ancestro.getValor())
        return `Ancestros del nodo: ${ancestrosValores.join(", ")}`
    }

    //Funcion para renderizar el nivel de un nodo
    const renderNivel = (valor) => {
        const nivelNodo = arbol.getNivel(valor)
        if (valor === null) {
            return ''
        }
        return 'El nodo está en el nivel: ' + nivelNodo
    }

    return (
        <div className='left-content scroll-content'>
            <h3 className='title-nodes'>Nodos del árbol</h3>
            <ul className='list'>
                {valoresNodos.map((nombre) => (
                    <li className='item-list' key={nombre}>
                        <button className='button-list' onClick={() => handleClick(nombre)}>
                            {nombre}
                        </button>
                        {nodoSeleccionado === nombre && (
                            <div className="nodo-info">
                                {renderTipoNodo(nombre)}
                                <br />
                                {renderParentNodo(nombre)}
                                <br />
                                {renderHermanosNodo(nombre)}
                                <br />
                                {renderHijosNodo(nombre)}
                                <br />
                                {renderDescendientes(nombre)}
                                <br />
                                {renderAncestros(nombre)}
                                <br />
                                {renderNivel(nombre)}
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