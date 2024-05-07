export function Square({ i, j, updateBoard, children }) {
    const handleClick = () => {
        const nodeName = prompt('Ingrese el nombre del nodo:');
        if (nodeName) {
            updateBoard(i, j, nodeName);
        }
    }

    // Verificar si el cuadrado contiene un asterisco
    const hasAsterisk = children === '*'
    const hasLine = children === '-'

    return (
        <div className={`square ${children ? 'filled' : ''} ${hasAsterisk ? 'asterisk' : 'node'} ${hasLine ? 'line' : 'node'}` } onClick={handleClick}>
            <span>{children}</span>
        </div>
    )
}