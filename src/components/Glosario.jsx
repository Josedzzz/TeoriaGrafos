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
                        <li><span className='highlighted'>V(G) </span>es el conjunto de vertices de G.</li>
                        <li>
                            <span className='highlighted'>E(G) </span>
                            es el conjunto de pares no ordenados de vertices distintos de G, llamados aristas.
                        </li>
                    </ul>
                </div>

                <div className='concept-grafo'>
                    <h3>Tipos de grafos</h3>
                    <p>A los grafos los podemos clasificar en los siguientes tipos:</p> 
                    <ul>
                        <li><span className='highlighted'>Multigrafo: </span>
                            Decimos que un grafo G es un multigrafo, si se permite que entre un mismo par de vertices
                            se trace más de una arista.
                        </li>
                        <li><span className='highlighted'>Grafo Regular: </span>
                            Un grafo se denomina regular, si todos sus vertices tienen el mismo grado.
                        </li>
                        <li><span className='highlighted'>Grafo Conexo: </span>
                            Se define como un grafo conexo a aquel que contiene un camino entre cada par de vertices.
                        </li>
                    </ul>
                </div>

                <div className='concept-grafo'>
                    <h3>Grado y vecinos de un nodo</h3>
                    <ul>
                        <li><span className='highlighted'>Grado: </span>
                            El grado de un vertice V en G es la cardinalidad del conjunto, y se denomina d(v). Es decir,
                            el grado de un vertice se define como el numero de aristas adyacentes a él.
                        </li>
                        <li><span className='highlighted'>Vecinos: </span>
                            Los vecinos de un vertice V, es el conjunto de los vertices adyacentes a V.
                        </li>
                    </ul>
                </div>

                <div className='concept-grafo'>
                    <h3>Ciclos y caminos en un grafo</h3>
                    <p>
                        Un ciclo en un grafo es una secuencia de vertices y aristas donde el vertice final coincide con
                        el inicial, formando así un camino cerrado. Mientras que un camino, es esa misma secuencia pero
                        en este, el vertice inicial y final no coinciden. 
                    </p>
                    <ul>
                        <li><span className='highlighted'>Ciclo euleriano: </span>
                            Es un camino cerrado o ciclo que pasa por cada arista del grafo exactamente una vez y 
                            regresa al nodo inicial.
                        </li>
                        <li><span className='highlighted'>Ciclo hamiltoniano: </span>
                            Es un camino cerrado o ciclo que pasa por cada vertice exactamente una vez y regresa
                            al vertice inicial.
                        </li>
                    </ul>
                </div>

            </div>
            
        </main>
    )
}