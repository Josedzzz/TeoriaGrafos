import './Inicio.css'

export function Inicio () {
    return (
        <main className='box-inicio'>
            <div className='title-inicio'>
                <h3>PIG (Programa para Interpretación de Grafos)</h3>
            </div>

            <div className='content-inicio'>

                <div className='concept-inicio'>
                    <h3>Presentado a</h3>
                    <p>
                        Prof. Pedro Pablo Cárdenas Alzate, Ph.D
                    </p>
                </div>

                <div className='concept-inicio'>
                    <h3>¿Qué es PIG?</h3>
                    <p>
                        PIG es un programa desarrollado para la interpretación de grafos y árboles de manera amigable,
                        en donde el usuario podrá dibujar uno de estos y obtener información relevante al respecto. Este
                        se creo como requisito para la materia teoría de grafos.
                    </p>
                </div>

                <div className='concept-inicio'>
                    <h3>Funcionalidades</h3>
                    <p>
                        Para este proyecto se trabajó la unidad I y IV, en donde se abordaron los temas 
                        de generalidades de grafos y árboles. Cuando el usuario construye un grafo o un árbol este podrá:
                    </p>
                    <p>
                        Grafos: Obtener información de los nodos (grado y vecinos del nodo), tipo de grafo (multigrago, 
                        regular y conexo), ciclo euleriano del grafo y ciclo hamiltoniano del grafo.
                    </p>
                    <p>
                        Árboles: Obtener información de los nodos (raiz, rama, hoja, padre del nodo, hermanos del nodo,
                        hijos del nodo, descendientes del nodo, ancestros del nodo, nivel del nodo) y información
                        general del árbol (Altura del árbol, pesó del arból y orden del árbol).
                    </p>
                </div>

            </div>
        </main>
    )
}