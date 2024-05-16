export function SquareTree({ i, j, updateBoard, children }) {
    const handleClick = () => {
        updateBoard(i, j)
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