import PropTypes from 'prop-types'

export function RightPanel ({ grafo }) {
    return (
        <h3>Prueba del contenido de la derecha</h3>
    )
}

// Definir PropTypes para rightPanel
RightPanel.propTypes = {
    grafo: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
}