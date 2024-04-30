export function Square({ index, updateBoard, children }) {
    const handleClick = () => {
      const nodeName = prompt('Ingrese el nombre del nodo:');
      if (nodeName) {
        updateBoard(index, nodeName);
      }
    }
  
    return (
        <div className={`square ${children ? 'filled' : ''}`} onClick={handleClick}>
          <span>{children}</span>
        </div>
    )
}