export function Square({ i, j, updateBoard, children }) {
  const handleClick = () => {
      const nodeName = prompt('Ingrese el nombre del nodo:');
      if (nodeName) {
          updateBoard(i, j, nodeName);
      }
  };

  return (
      <div className={`square ${children ? 'filled' : ''}`} onClick={handleClick}>
          <span>{children}</span>
      </div>
  );
}