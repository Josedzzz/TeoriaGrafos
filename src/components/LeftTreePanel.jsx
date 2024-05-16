import './LeftTreePanel.css'
import PropTypes from 'prop-types'

export function LeftTreePanel ({ arbol }) {

    const valoresNoodos = arbol.getListaValores()
    console.log(valoresNoodos)

    return (
        <div className='left-content-tree'>
            <h3>Prueba del contenido de la izquierda</h3>
        </div>
    )
}

LeftTreePanel.propTypes = {
    arbol: PropTypes.object.isRequired, // arbol debe ser un objeto requerido
}