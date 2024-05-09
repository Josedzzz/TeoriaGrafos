import './Glosario.css'

export function Glosario () {
    return (
        <main className='box-glosario'>
            <div className='title-glosario'>
                <h3>Profundización de grafos</h3>
            </div>  

            <div className='content-glosario'>

                <div className='concept-grafo'>
                    <h3>¿Qué es un grafo?</h3>
                    <p>Un grafo es un par de vertices y aristas, es decir, está conformado por la pareja (V(G), E(G)):</p>
                    <ul>
                        <li><span className='highlighted'>V(G) </span>es el conjunto de vertices de G, llamados nodos.</li>
                        <li>
                            <span className='highlighted'>E(G) </span>
                            es el conjunto de pares no ordenados de vertices distintos de G, llamados aristas.
                        </li>
                    </ul>
                </div>

                <div className='tipos-grafo'>
                    <h3>Tipos de grafos</h3>

                </div>

            </div>
            
        </main>
    )
}