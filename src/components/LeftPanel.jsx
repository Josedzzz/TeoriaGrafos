import PropTypes from 'prop-types'

export function LeftPanel ({ grafo }) {
    // Obtener los nombres de los nodos del grafo
    const nombresNodos = grafo.obtenerNombresNodos()

    // Obtener los nombres de las aristas del grafo
    const nombresAristas = grafo.obtenerNombresAristas()

    return (
        <div>
            <h3>Nombres de Nodos:</h3>
            <ul>
                {nombresNodos.map((nombre) => (
                    <li key={nombre}>{nombre}</li>
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