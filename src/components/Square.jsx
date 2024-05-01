export function Square({ i, j, updateBoard, children }) {
    const handleClick = () => {
        const nodeName = prompt('Ingrese el nombre del nodo:');
        if (nodeName) {
            updateBoard(i, j, nodeName);
        }
    }

    // Verificar si el cuadrado contiene un asterisco
    const hasAsterisk = children === '*';

    return (
        <div className={`square ${children ? 'filled' : ''} ${hasAsterisk ? 'asterisk' : 'node'}`} onClick={handleClick}>
            <span>{children}</span>
        </div>
    )
}