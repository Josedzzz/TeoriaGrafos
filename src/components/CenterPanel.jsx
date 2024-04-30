import './CenterPanel.css'

export function CenterPanel () {
    return (
        <div className='draw-template'>
            <div className='graph-area'>

            </div>
            <div className='button-area'>
                <button>Ingresar Nodo</button>
                <button>Ingresar Arista</button>
            </div>
        </div>
    )
}