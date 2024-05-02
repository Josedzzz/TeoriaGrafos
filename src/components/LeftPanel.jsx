import PropTypes from 'prop-types';

export function LeftPanel ({ grafo }) {
    return (
        <h3>Prueba del contenido de la izquierda</h3>
    )
}


// Definir PropTypes para leftPanel
LeftPanel.propTypes = {
    grafo: PropTypes.object.isRequired, // grafo debe ser un objeto requerido
};