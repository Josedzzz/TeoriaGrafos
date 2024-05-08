import { Nodo } from "./Nodo";
import { Arista } from "./Arista";

export class Grafo {
    constructor() {
        this.nodos = new Set() // Conjunto de nodos
        this.aristas = [] // Lista de aristas
    }

    addNodo(nombre, posicionI, posicionJ) {
        if (!this.existeNodo(nombre)) {
            const nodo = new Nodo(nombre, posicionI, posicionJ);
            this.nodos.add(nodo);
        } 
    }

    addArista(nodoInicio, nodoFin, camino) {
        const arista = new Arista(nodoInicio, nodoFin, camino)
        this.aristas.push(arista)
    }

    existeNodo(nombre) {
        for (const nodo of this.nodos) {
            if (nodo.nombre === nombre) {
                return true;
            }
        }
        return false;
    }
    existeArista(nodoInicio, nodoFin) {
        // Iterar sobre las aristas para buscar una que conecte nodoInicio con nodoFin
        for (const arista of this.aristas) {
            if (
                (arista.nodoInicio === nodoInicio && arista.nodoFin === nodoFin) ||
                (arista.nodoInicio === nodoFin && arista.nodoFin === nodoInicio)
            ) {
                return true; // Se encontró una arista que conecta los nodos dados
            }
        }
        return false; // No se encontró ninguna arista entre los nodos dados
    }

    getNodeByName(nombreNodo) {
        for (const nodo of this.nodos) {
            if (nodo.nombre === nombreNodo) {
                return nodo;
            }
        }
        return null; 
    }

    encontrarCaminoEntreNodos(nodoInicio, nodoFin) {
        // Coordenadas del nodo de inicio
        let i = nodoInicio.posicionI;
        let j = nodoInicio.posicionJ;
        
        // Coordenadas del nodo de fin
        const endI = nodoFin.posicionI;
        const endJ = nodoFin.posicionJ;
        
        // Camino entre los nodos
        const camino = [];
        
        // Mientras no se alcance el nodo de fin
        while (i !== endI || j !== endJ) {
            // Agregar las coordenadas actuales al camino
            camino.push({ i, j });
            
            // Moverse hacia el nodo de fin
            if (i < endI) {
                i++;
            } else if (i > endI) {
                i--;
            }
            
            if (j < endJ) {
                j++;
            } else if (j > endJ) {
                j--;
            }
        }
        
        // Agregar el nodo de fin al camino
        camino.push({ i, j });

        // Remover el primer y el último elemento del camino (los nodos de inicio y fin)
        camino.shift();
        camino.pop();
        
        return camino;
    }
    
    //Funcion para obtener el grado de un nodo dado su nombre
    getGradoNodo(nombreNodo) {
        const nodo = this.getNodeByName(nombreNodo);
        if (!nodo) {
            return 0; // Si el nodo no existe en el grafo, el grado es cero.
        }

        let grado = 0;
        for (const arista of this.aristas) {
            if (arista.nodoInicio.equals(nodo) || arista.nodoFin.equals(nodo)) {
                grado++;
            }
        }
        return grado;
    }

    //Funcion para obtener los vecinos de un nodo dado su nombre
    getVecinosNodo(nombreNodo) {
        const nodo = this.getNodeByName(nombreNodo)
        if (!nodo) return 'Error'
        let vecinos = '{ '
        for (const arista of this.aristas) {
            if (arista.nodoInicio.equals(nodo)) {
                vecinos = vecinos + ' ' + arista.nodoFin.nombre
            } else if (arista.nodoFin.equals(nodo)) {
                vecinos = vecinos + ' ' + arista.nodoInicio.nombre
            }
        }
        return vecinos + ' }'
    }

    //Funcion para saber si el grafo es un multigrafo
    isMultigrafo() {
        const aristasUnicas = new Set()
        for (const arista of this.aristas) {
            const key = `${arista.nodoInicio.nombre}-${arista.nodoFin.nombre}`
            const key1 = `${arista.nodoFin.nombre}-${arista.nodoInicio.nombre}`
            if (aristasUnicas.has(key) || aristasUnicas.has(key1)) {
                return true
            }
            aristasUnicas.add(key)
            aristasUnicas.add(key1)
        }
        return false
    }

    //Funcion para saber si el grafo es regular
    isRegular() {
        const grados = this.obtenerGradosDeNodos()
        const primerGrado = Object.values(grados)[0]
        for (const grado of Object.values(grados)) {
            if (grado !== primerGrado) {
                return false;
            }
        }
        return true
    }

    //Funcion para saber si el grafo es conexo
    isConexo() {
        const nodos = Array.from(this.nodos)
        const visitados = new Set()
        const pila = [nodos[0]] // Comenzamos desde el primer nodo
    
        while (pila.length > 0) {
            const nodoActual = pila.pop();
            visitados.add(nodoActual);
    
            for (const arista of this.aristas) {
                if (arista.nodoInicio === nodoActual && !visitados.has(arista.nodoFin)) {
                    pila.push(arista.nodoFin)
                }
                if (arista.nodoFin === nodoActual && !visitados.has(arista.nodoInicio)) {
                    pila.push(arista.nodoInicio)
                }
            }
        }
        return visitados.size === nodos.length
    }

    //Obtiene el numero de nodos del grafo
    getNumNodos() {
        return this.nodos.size
    }

    //Obtiene el numero de aristas del grafo
    getNumEdges() {
        return this.aristas.length
    }

    //Obtiene el ciclo euleriano del grafo si es que existe
    isEuleriano() {
        // El grafo debe ser conexo y todos los nodos deben tener grado par
        return this.isConexo() && !this.isMultigrafo() && this.areAllNodesEvenDegree();
    }

    // Función para verificar si todos los nodos tienen grado par
    areAllNodesEvenDegree() {
        for (const nodo of this.nodos) {
            const grado = this.getGradoNodo(nodo.nombre);
            if (grado % 2 !== 0) {
                return false;
            }
        }
        return true;
    }

    // Función para obtener un ciclo euleriano utilizando Fleury's Algorithm
    getCicloEuleriano() {
        if (!this.isEuleriano()) {
            return []; // No existe un ciclo euleriano
        }

        const aristasNoVisitadas = [...this.aristas]; // Copia de todas las aristas
        const ciclo = [];
        let inicio = this.nodos.values().next().value; // Empezar en un nodo cualquiera

        const dfs = (nodo) => {
            for (let i = 0; i < aristasNoVisitadas.length; i++) {
                const arista = aristasNoVisitadas[i];
                if (arista.nodoInicio.equals(nodo) || arista.nodoFin.equals(nodo)) {
                    const vecino = arista.nodoInicio.equals(nodo) ? arista.nodoFin : arista.nodoInicio;
                    aristasNoVisitadas.splice(i, 1); // Eliminar arista de la lista
                    dfs(vecino);
                }
            }
            ciclo.push(nodo);
        };

        dfs(inicio);

        // Revertir ciclo para obtener el orden correcto
        ciclo.reverse();

        return ciclo;
    }

    getCicloHamiltoniano() {
        // Verificar si el grafo es Hamiltoniano
        if (!this.isHamiltoniano()) {
            return []; // No existe un ciclo Hamiltoniano en el grafo
        }
    
        const nodos = Array.from(this.nodos);
        const inicio = nodos[0]; // Empezar desde un nodo cualquiera
    
        // Función auxiliar para realizar DFS y encontrar un ciclo Hamiltoniano
        const dfs = (actual, visitados, camino) => {
            visitados.add(actual);
    
            // Agregar nodo actual al camino
            camino.push(actual);
    
            // Si se visitaron todos los nodos y hay una arista de regreso al nodo inicial, retornar el camino como ciclo Hamiltoniano
            if (camino.length === nodos.length && this.existeArista(actual, inicio)) {
                camino.push(inicio);
                return camino.map(nodo => nodo.nombre); // Devolver nombres de nodos en el ciclo Hamiltoniano
            }
    
            // Recorrer todos los vecinos del nodo actual
            for (const arista of this.aristas) {
                if (arista.nodoInicio.equals(actual) && !visitados.has(arista.nodoFin)) {
                    const result = dfs(arista.nodoFin, new Set(visitados), [...camino]);
                    if (result.length > 0) {
                        return result;
                    }
                } else if (arista.nodoFin.equals(actual) && !visitados.has(arista.nodoInicio)) {
                    const result = dfs(arista.nodoInicio, new Set(visitados), [...camino]);
                    if (result.length > 0) {
                        return result;
                    }
                }
            }
    
            return []; // No se encontró un ciclo Hamiltoniano desde este nodo
        };
    
        // Iniciar la búsqueda DFS desde el nodo inicial
        const caminoHamiltoniano = dfs(inicio, new Set(), []);
    
        return caminoHamiltoniano;
    }
    
    // Función auxiliar para verificar si el grafo es Hamiltoniano
    isHamiltoniano() {
        // El grafo debe ser conexo y cumplir con la condición de Dirac o Ore para ser Hamiltoniano
        return this.isConexo() && this.satisfaceCondicionHamiltoniana();
    }
    
    // Función auxiliar para verificar la condición de Dirac o Ore para ser Hamiltoniano
    satisfaceCondicionHamiltoniana() {
        const numNodos = this.getNumNodos();
    
        // Condición de Dirac: Cada vértice debe tener grado al menos n/2
        // Condición de Ore: Para cada par de vértices no adyacentes, su suma de grados debe ser al menos n
        for (const nodo of this.nodos) {
            const grado = this.getGradoNodo(nodo.nombre);
            if (grado < numNodos / 2) {
                return false; // No satisface la condición de Dirac
            }
        }
    
        // Verificar condición de Ore (comparar pares de vértices no adyacentes)
        for (const nodo1 of this.nodos) {
            for (const nodo2 of this.nodos) {
                if (!this.existeArista(nodo1, nodo2)) {
                    const gradoNodo1 = this.getGradoNodo(nodo1.nombre);
                    const gradoNodo2 = this.getGradoNodo(nodo2.nombre);
                    if (gradoNodo1 + gradoNodo2 < numNodos) {
                        return false; // No satisface la condición de Ore
                    }
                }
            }
        }
    
        return true; // El grafo satisface la condición de Dirac y Ore para ser Hamiltoniano
    }
    

    /*
    Función para obtener un diccionario con el siguiente orden: nombreNodo: grado nodo
    Esto para obtener el grado de todos los vertices. 
    */
    obtenerGradosDeNodos() {    
        const grados = {};
        for (const nodo of this.nodos) {
            const nombreNodo = nodo.nombre;
            const grado = this.getGradoNodo(nombreNodo);
            grados[nombreNodo] = grado;
        }
        return grados;
    }

    obtenerNombresNodos() {
        const nombresNodos = [];
        for (const nodo of this.nodos) {
            nombresNodos.push(nodo.nombre);
        }
        return nombresNodos;
    }

    obtenerNombresAristas() {
        const nombresAristas = [];
        for (const arista of this.aristas) {
            const nombreArista = `${arista.nodoInicio.nombre}-${arista.nodoFin.nombre}`;
            nombresAristas.push(nombreArista);
        }
        return nombresAristas;
    }

}